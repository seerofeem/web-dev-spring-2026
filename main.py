from models import Vehicle, Car, Truck

def main():

    generic_v = Vehicle("Generic", "BaseModel", 2020)
    my_car = Car("Tesla", "Model 3", 2023, "Electricity")
    my_truck = Truck("Volvo", "FH16", 2022, 25)

    vehicles_list = [generic_v, my_car, my_truck]


    for v in vehicles_list:
        print(f"Vehicle Info: {v}")
        print(v.start_engine())
        print(v.drive())


if __name__ == "__main__":
    main()