
let timeBeforeRemoveChild = new Date();
let ct = "20190624T064554";

setTimeout(() => {
    let [date, time] = ct.split('T');
    let creationDate = new Date(`${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}T${time.substring(0, 2)}:${time.substring(2, 4)}:${time.substring(4, 6)}Z`);
    //let presentDate = new Date(ct);
    console.log(`Creation date is ${creationDate.getTime()} and time before remove child is ${timeBeforeRemoveChild.getTime()}`);
    console.log(`Present date is ${creationDate.getTime()} and time before remove child is ${timeBeforeRemoveChild.getTime()}`);
}, 3000);


 /* console.log(`Creation date is ${new Date(1561360839000).toString()} and time beffore remove child ${new Date(1561360839000).toString()}`) */