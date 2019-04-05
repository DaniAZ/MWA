const os = require('os');
const { Subject } = require('rxjs');
// const { of, iif } = require('rxjs');
// const { reduce, map } = require('rxjs/operators');

const myObservable$ = new Subject();

checkSystem = () => {
 myObservable$.next("Checking your system...");

    let warningRam = "";
    let warningCore = "";
    const numOfCores = os.cpus().length;
    const ram = os.cpus()[0].speed * numOfCores / 1024;
    if (ram < 4) {
        warningRam = "This app need at least 4GB of RAM"
    }
    if (numOfCores < 2) {
        warningCore = "Processor is not Supported"
    }
    if (warningCore != '' || warningRam != '') {
        myObservable$.error({ RAM: warningRam, CORE: warningCore })
    }else{
        myObservable$.next("System is checked successfully")
    }
   
    myObservable$.complete()
}

myObservable$.subscribe(
    (value) => console.log(value),
    (error) => console.log(error));
checkSystem();

