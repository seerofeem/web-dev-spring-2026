class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The {self.brand} engine is starting."

    def drive(self):
        return f"The {self.brand} {self.model} is now driving."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type 

    def drive(self):
        return f"The {self.brand} car cruises smoothly on {self.fuel_type}."


class Truck(Vehicle):
    def __init__(self, brand, model, year, max_load):
        super().__init__(brand, model, year)
        self.max_load = max_load 
    def drive(self):
        return f"The {self.brand} truck hauls a heavy load of {self.max_load} tons."