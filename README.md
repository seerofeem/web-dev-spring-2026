# shop-back — Django Backend API (Lab 8)

## Setup

```bash
# 1. Create & activate virtual environment
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run migrations
python manage.py migrate

# 4. Load sample data (optional)
python manage.py loaddata initial_data

# 5. Start the dev server
python manage.py runserver
```

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/products/ | All products |
| GET | /api/products/<id>/ | Single product |
| GET | /api/categories/ | All categories |
| GET | /api/categories/<id>/ | Single category |
| GET | /api/categories/<id>/products/ | Products by category |
