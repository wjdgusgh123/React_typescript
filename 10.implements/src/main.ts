class Car{
    mileage = 0;
    price = 100;
    color = 'white';

    dive(){
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

interface Part{
    seats: number;
    tire: number;
}

class Ford implements Car, Part{
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 2;
    tire = 3;

    dive(){
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

const myFordCar = new Ford();
myFordCar