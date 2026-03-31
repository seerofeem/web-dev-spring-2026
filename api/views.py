import json
from django.http import JsonResponse, Http404
from django.views.decorators.http import require_GET

from .models import Product, Category


# ── helpers ────────────────────────────────────────────────────────────────

def product_to_dict(p):
    return {
        'id':          p.id,
        'name':        p.name,
        'price':       p.price,
        'description': p.description,
        'count':       p.count,
        'is_active':   p.is_active,
        'category_id': p.category_id,
        'category':    p.category.name,
        'rating':      p.rating,
        'image':       p.image,
        'images':      [],
        'link':        p.link,
    }


def category_to_dict(c):
    return {
        'id':   c.id,
        'name': c.name,
    }


# ── Product endpoints ───────────────────────────────────────────────────────

@require_GET
def product_list(request):
    """GET /api/products/ — all products"""
    products = Product.objects.select_related('category').all()
    return JsonResponse([product_to_dict(p) for p in products], safe=False)


@require_GET
def product_detail(request, id):
    """GET /api/products/<id>/ — single product"""
    try:
        product = Product.objects.select_related('category').get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    return JsonResponse(product_to_dict(product))


# ── Category endpoints ──────────────────────────────────────────────────────

@require_GET
def category_list(request):
    """GET /api/categories/ — all categories"""
    categories = Category.objects.all()
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)


@require_GET
def category_detail(request, id):
    """GET /api/categories/<id>/ — single category"""
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    return JsonResponse(category_to_dict(category))


@require_GET
def category_products(request, id):
    """GET /api/categories/<id>/products/ — products filtered by category"""
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    products = Product.objects.filter(category=category).select_related('category')
    return JsonResponse([product_to_dict(p) for p in products], safe=False)
