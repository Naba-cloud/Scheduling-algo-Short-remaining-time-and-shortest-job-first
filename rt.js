
   var p1,p2,p3,p4,p5;
   p1=[];
   p2=[];
   p3=[];
   p4=[];
   p5=[];
   var size=Math.floor((Math.random()*6)+4)
   for(let i=0;i<size;i++)
    {
    var y=Math.floor((Math.random()*90)+1);
    // console.log(y);
    p1.push(y);
    }
    var size1=Math.floor((Math.random()*6)+4);
    //var size1=Math.round((Math.random()*6)+4);
    for(let i=0;i<size1;i++)
    {
     var y1=Math.floor((Math.random()*80)+1);
     // console.log(y);
     p2.push(y1);
     }
   
     //console.log(p2);
     var size2=Math.round((Math.random()*6)+4);
     // var size2=Math.round((Math.random()*6)+4);
     for(let i=0;i<size2;i++)
     {
     var y2=Math.floor((Math.random()*70)+1);
     // console.log(y);
     p3.push(y2);
     }
     var size3=Math.round((Math.random()*6)+4);
     for( let i=0;i<size3;i++)
     {
     var y3=Math.floor((Math.random()*60)+1);
     // console.log(y);
     p4.push(y3);
     }
     var size4=Math.round((Math.random()*6)+4);
     for(let i=0;i<size4;i++)
     {
     var y4=Math.floor((Math.random()*50)+1);
     p5.push(y4);
     }
   
     var l=[p1,p2,p3,p4,p5];
   
     console.log(l);
     let Pid = 1 
   
     let pd = {
       id: Pid++,
       process: l.shift()
     }
     
     let newProc = [pd];
   
   
     for(let i=0;;i++)
     {
    for (let i = 0; i < newProc.length; i++) {
      console.log("process "+newProc[i].id+":"+newProc[i].process)
   
    }
    let minLen = newProc[0].process.length;
    let Ind = 0;
    for (let j = 0; j < newProc.length; j++) {
     const len = newProc[j].process.length;
     if (minLen > len) {
       Ind = j; 
       minLen = len; 
     } 
   }
   console.log(newProc[Ind].process.shift());
   
   if (newProc[Ind].process.length === 0) {
     const PID = newProc[Ind].id; 
     newProc.splice(Ind, 1); 
     
   console.log("Process Number " + PID + " is completed");
   }
   if (l.length !== 0) {
   
   
     pd = {
       id: Pid++,
       process: l.shift()
     }
     
     newProc.push(pd);
   }
   if (newProc.length === 0) {
     break;
   }
     }