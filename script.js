function Car(brandName, model, productionYear) {
    this.brandName = brandName;
    this.model = model;
    this.productionYear = productionYear;
}


var car = _.create(Car.prototype, {brandName: 'Porshe', model: 'GT 911', productionYear: 2016});
console.log(car);

var invertedValues = _.invert(car);
console.log('Object with inverted values');
console.log(invertedValues);

var omitedCar = _.omit(car, 'model');
console.log('object without model')
console.log(omitedCar);