var COUNTER_INTERVAL_SECONDS = 2;
var counters = [];
var Counter = function (className, value) {
    console.log('counter created');
    var selector = document.querySelector('.' + className);
    this.value = value;
    this.name = className;
    this.intervalTotalCounter = 0;
    this.od = new Odometer({
        el: selector,
        duration: 300000,
        value: value
    });
    counters.push(this);
};

Counter.prototype.update = function(newValue,seconds){
    var leap = ((newValue - this.value) /seconds ) * COUNTER_INTERVAL_SECONDS ;
    if (seconds < COUNTER_INTERVAL_SECONDS) { leap = newValue};
    console.log("value before " + this.value);
    console.log("value after " + newValue);
    console.log("leap " + leap);
    this.newValue = newValue;
    this.leap = leap;
    increase(this);
    this.intervalCounter = 0;
    this.intervalTotalCounter++;
    clearInterval(this.myInterval);
    this.myInterval = setInterval(increase, COUNTER_INTERVAL_SECONDS * 1000, this);
};

function increase(counter, newValue) {
    console.log("interval number :" + counter.intervalCounter++);
    if ( counter.value >= counter.newValue) {
        clearInterval(counter.myInterval);
        console.log("clearing interval");
        return;
    };
    console.log("increasing counter: " + counter.name);
    counter.value += counter.leap;
    console.log("leap to this value: " + counter.value);
    counter.od.update(counter.value);

}