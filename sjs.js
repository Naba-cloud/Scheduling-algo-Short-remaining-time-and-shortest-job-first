var p1,p2,p3,p4,p5;

p1=[];
p2=[];
p3=[];
p4=[];
p5=[];
var size=Math.floor((Math.random()*6)+4)
for(i=0;i<size;i++)
   {
    
       var y=Math.floor((Math.random()*90)+1);
      // console.log(y);
       p1.push(y);
     
   }
   console.log(p1); 

   var size1=Math.floor((Math.random()*6)+4);
   
    //var size1=Math.round((Math.random()*6)+4);
    for(i=0;i<size1;i++)
   {
       var y1=Math.floor((Math.random()*80)+1);
      // console.log(y);
       p2.push(y1);
      
   
   }
    
   


console.log(p2);
   //console.log(p2);
   var size2=Math.round((Math.random()*6)+4);
   
   // var size2=Math.round((Math.random()*6)+4);
  

  
  for(i=0;i<size2;i++)
   {
       var y2=Math.floor((Math.random()*70)+1);
      // console.log(y);
       p3.push(y2);
     
   }

   console.log(p3);
   
        var size3=Math.round((Math.random()*6)+4);
   
   for(i=0;i<size3;i++)
   {
       var y3=Math.floor((Math.random()*60)+1);
      // console.log(y);
       p4.push(y3);
     
   }

   console.log(p4);

    var size4=Math.round((Math.random()*6)+4);   

  
  for(i=0;i<size4;i++)
   {
       var y4=Math.floor((Math.random()*50)+1);
      // console.log(y);
       p5.push(y4);
     
   }


   console.log(p5);

   
    
/*if(p1.length<=p2.length && p3.length && p4.length && p5.length)
 {
     console.log(p1);
     console.log('process completed');
     p1=null;
     console.log(p2);
     console.log(p3);
     console.log(p4);
     console.log(p5);
 }
    else  if(p2.length<=p3.length && p4.length && p5.length  && p1.length)
     {
         console.log('process comp');
         console.log(p2);
         console.log(p3);
         console.log(p4);
         console.log(p5);
     }
    else if(p3.length<=p2.length && p4.length && p5.length )
     {
         console.log('process comp',p3);
         console.log(p2);
         console.log(p4);
         console.log(p5);
     }
     if(p4.length<=p5.length && p3.length && p2.length )
     {
         console.log('process comp',p4);
         console.log(p2);
         console.log(p3);
         console.log(p5);
     }
      if(p5.length<=p4.length &&  p3.length && p2.length)
     {
        console.log('process comp',p5);
        console.log(p2);
        console.log(p3);
        console.log(p4);

     
 }
    if(p2.length<=p1.length && p3.length && p4.length && p5.length)
     {
        console.log(p2);
        console.log('process completed');
        console.log(p1);
        console.log(p3);
        console.log(p4);
        console.log(p5);
     }
     if(p3.length<= p4.length &&  p5.length &&p1.length && p2.length)
     {
        console.log(p3);
        console.log('process completed');
        console.log(p1);
        console.log(p2);
        console.log(p4);
        console.log(p5);
     }
        if(p4.length<=  p1.length && p2.length && p3.length && p5.length)
        {
           console.log(p4);
           console.log('process completed');
           console.log(p1);
           console.log(p2);
           console.log(p3);
           console.log(p5);
       
     
     
 }
 else if (p5.length <p1.length && p2.length && p3.length && p4.length)
 {
     console.log(p5);
     console.log('remaining are ',p1,p2,p3,p4);
 }*/
//  else if(p2.length<p1.length&& p3.length&&p4.length&&p4.length&&p5.length)
//  {
//      console.log(p2);
//      console.log('process completed');
//      console.log(p1);
//      console.log(p3);
//      console.log(p4);
//      console.log(p5);
//  }


if(p1.length<=p2.length &&p1.length<= p3.length && p1.length<=p4.length && p1.length<=p5.length)
 {
     console.log(p1);
     console.log('process completed');
   
     console.log(p2);
     console.log(p3);
     console.log(p4);
     console.log(p5);
     if(p2.length<=p3.length && p2.length<=p4.length && p2.length <= p5.length)
     {
        console.log(p2);
        console.log('process completed');
        console.log(p3);
        console.log(p4);
        console.log(p5);

        if(p3.length<=p4.length && p3.length <= p5.length)
        {
            console.log(p3);
            console.log('process completed');
            console.log(p4);
            console.log(p5);
            if(p4.length<=p5.length)
            {
                console.log(p4);
                console.log('process completed');
                
            console.log(p5);
            console.log('process completed');
            }
            else if(p5.length <=p4.length)
            {
                console.log(p5);
                console.log('process completed');
                console.log(p4);
                console.log('process completed');
            }
        }
        else if(p4.length<=p3.length && p5.length)
        {
            console.log(p4);   
            console.log('process completed');
            console.log(p3);
            console.log(p5);
            if(p3.length<=p5.length)
            {
                console.log(p3);
                console.log('process completed');
                console.log(p5);
                console.log('process completed');

            }
            else if(p5.length <=p3.length)
            {
                console.log(p5);
                console.log('process completed');  
                console.log(p3);
                console.log('process completed'); 
            }
        }
        else if(p5.length<=p3.length && p4.length)
        {
            console.log(p5);
            console.log('process completed');
            console.log(p3);
            console.log(p4);
            if(p3.length<=p4.length)
            {
                console.log(p3);
                console.log('process completed');
                console.log(p4);
                console.log('process completed');
            }
            else if(p4.length<=p3.length)
            {
                console.log(p4);
                console.log('process completed');  
                console.log(p3);
                console.log('process completed'); 
            }
        }
        
     }
    
     
     else if(p3.length <= p4.length && p3.length<=p5.length && p3.length<=p2.length)
     {
        console.log(p3);
        console.log('process completed');
        console.log(p2);
        console.log(p4);
        console.log(p5);
        if(p2.length<=p4.length && p5.length)
        {
            console.log(p2);
            console.log('process completed');
            console.log(p4);
            console.log(p5);
            if(p4.length<=p5.length)
            {
                console.log(p4);
                console.log('process completed');
                console.log(p5);
                console.log('process completed');
            }
        }
     }
     else if(p4.length <= p3.length && p4.length<=p5.length && p4.length<=p2.length)
     {
        console.log(p4);
        console.log('process completed'); 
        console.log(p2);
        console.log(p3);
        console.log(p5);
        if(p2.length<=p3.length && p5.length)
        {
            console.log(p2);
            console.log('process completed'); 
            console.log(p3);
            console.log(p5);
            if(p3.length<=p5.length)
            {
                console.log(p3);
                console.log('process completed'); 
                console.log(p5);
                console.log('process completed'); 
               
            }
            else if(p5.length <= p3.length )
            {
                console.log(p5);
                console.log('process completed'); 
               
            }
        }
     }
     else if(p5.length <= p4.length && p5.length<=p3.length && p5.length<=p2.length)
     {
        console.log(p5);
        console.log('process completed'); 
        console.log(p2);
        console.log(p3);
        console.log(p4);
        if(p2.length<=p3.length && p4.length )
        {
            console.log(p2);   
            console.log('process completed'); 
            console.log(p3);
            console.log(p4);
            if(p3.length <=p4.length )
            {
                console.log(p3);
                console.log('process finished');
                console.log(p4);
                console.log('process finished');

            }
            else if(p4.length <= p3.length)
            {
                console.log(p4);
                console.log('process finished');
                console.log(p3);
                console.log('process finished');
            }
        }
       
     }
    }
    else  if(p2.length<=p3.length && p2.length<= p4.length &&  p2.length<= p5.length  &&  p2.length<= p1.length)
     {
        console.log(p2);
         console.log('process comp');
        
         console.log(p1);
         console.log(p3);
         console.log(p4);
         console.log(p5);
         if(p1.length <= p3.length && p4.length && p5.length)
         {
            console.log(p1);
            console.log('process completed');
            console.log(p3);
            console.log(p4);
            console.log(p5);
            if(p3.length <= p4.length && p5.length)
            {
                console.log(p3);
                console.log('process completed');
                console.log(p4);
            console.log(p5);
            if(p4.length<=p5.length)
            {
                console.log(p4);
                console.log('process completed');
                console.log(p5);
            }
            else if(p5.length <=p4.length)
            {
                console.log(p5);
                console.log('process completed');
                console.log(p4);
            }
            }
         }
         else if(p3.length<=p1.length && p4.length && p5.length)
         {
          console.log(p3);
          console.log('remaining process');
          console.log(p1);
          console.log(p4);
          console.log(p5);
          if(p1.length<=p4.length && p5.length)
          {
            console.log(p1); 
            console.log('process completed');
            console.log(p4);
            console.log(p5);
            if(p4.length <= p5.length)
            {
                console.log(p4);
                console.log('process completed');
                console.log(p5);
                console.log('process completed');
            }
            else if(p5.length <= p4.length)
            {
                console.log(p5);
                console.log('process completed');
                console.log(p4);
                console.log('process completed');
            }

          }
         }
         else if(p4.length <= p1.length && p3.length && p5.length)
         {
             console.log(p4);
             console.log('process completed');
             console.log(p1);
             console.log(p3);
             console.log(p5);
             if(p1.length<=p3.length && p5.length)
             {
                console.log(p1);  
                console.log('process completed') ;
                console.log(p3);
                console.log(p5);
                if(p3.length<=p5.length)
                {
                    console.log(p3);
                    console.log('process completed') ;
                    console.log(p5);
                    console.log('process completed') ;
                }
                else if(p5.length<=p3.length)
                {
                    console.log(p5);
                    console.log('process completed') ;
                    console.log(p3);
                    console.log('process completed') ;
                }
             }
             else if(p3.length <= p1.length && p5.length)
             {
                console.log(p3);
                console.log('process completed') ;
                console.log(p1); 
                console.log(p5);
             }
             else if(p5.length<=p1.length && p3.length)
             {
                console.log(p5);
                console.log('process completed') ;
                console.log(p1); 
                console.log(p3);
                if(p1.length<=p3.length)
                {
                    console.log(p1); 
                    console.log('process completed') ;
                    console.log(p3);
                    console.log('process completed') ;
               
                }
                else if(p3.length<=p1.length)
                {
                    console.log(p3); 
                    console.log('process completed') ;
                    console.log(p1);
                    console.log('process completed') ;
               
                }
             }
         }
         else if(p5.length<= p1.length && p3.length && p4.length)
         {
            console.log(p5);
            console.log('process completed');
            console.log(p1);
             console.log(p3);
             console.log(p4);
             if(p1.length <= p3.length && p4.length)
             {
                console.log(p1);
                console.log('process completed');
                console.log(p3);
                console.log(p4);
                if(p3.length<=p4.length)
                {
                    console.log(p3);
                    console.log('process completed');
                    console.log(p4);
                    console.log('process completed');
                }
                else  if(p4.length<=p3.length)
                {
                    console.log(p4);
                    console.log('process completed');
                    console.log(p3);
                    console.log('process completed');
                }
             }
             else if(p3.length <=p1.length && p4.length)
             {
                console.log(p3);
                console.log('process completed');
                console.log(p1);
                console.log(p4);
                if(p1.length<=p4.length)
                {
                    console.log(p1);
                    console.log('process completed');
                    console.log(p4);
                    console.log('process completed');
                }
                else  if(p4.length<=p1.length)
                {
                    console.log(p4);
                    console.log('process completed');
                    console.log(p1);
                    console.log('process completed');
                }
             }
             else if(p4.length <=p1.length && p3.length)
             {
                console.log(p4);
                console.log('process completed');
                console.log(p1);
                console.log(p3);
                if(p1.length<=p3.length)
                {
                    console.log(p1);
                    console.log('process completed');
                    console.log(p3);
                    console.log('process completed');
                }
                else if(p3.length<=p1.length)
                {
                    console.log(p3);
                    console.log('process completed');
                    
                    console.log(p1);
                    console.log('process completed');
                }
             }
         }
     }
    else if(p3.length<=p2.length && p3.length<=p4.length && p3.length<=p5.length  && p3.length<=p1.length)
     {
        console.log(p3);
         console.log('process comp');
         
         console.log(p1)
         console.log(p2);
         console.log(p4);
         console.log(p5);
         if(p1.length<=p2.length && p4.length && p5.length )
         {
             console.log(p1);
               console.log('process comp');
               console.log(p2);
         console.log(p4);
         console.log(p5);
               if(p2.length<=p4.length && p5.length)
               {
                    console.log(p2);
                      console.log('process comp');
                      console.log(p4);
         console.log(p5);
         if(p4.length<=p5.length)
         {
             console.log(p4);
              console.log('process comp');
               console.log(p5);
                 console.log('process comp');
         }
         else if(p5.length<=p4.length)
         {
              console.log(p5);
                 console.log('process comp');
                  console.log(p4);
              console.log('process comp');
         }
               }
         }
         else if(p2.length<=p1.length && p4.length && p5.length)
         {
           console.log(p2);
                      console.log('process comp');
                      console.log(p1);
                      console.log(p4);
                      console.log(p5);
                      if(p1.length<=p4.length && p5.length)  
                      {
                        console.log(p1); 
                         console.log('process comp');  
                         console.log(p4);
                      console.log(p5);
                      if(p4.length <= p5.length)
                      {
                           console.log(p4);
                            console.log('process comp');
                             console.log(p5);
                              console.log('process comp');
                      }
                      else if(p5.length<=p4.length)
                        {
                                console.log(p5);
                              console.log('process comp');
                               console.log(p4);
                            console.log('process comp');
                        }
                      } 
         }
         else if(p4.length<=p1.length && p2.length && p5.length)
         {
                    console.log(p4);
                            console.log('process comp');
                            console.log(p1);
                             console.log(p2);
                             console.log(p5);
                             if(p1.length<=p2.length && p5.length )
                             {
                                 console.log(p1);
                                 console.log('process comp');
                                 if(p2.length<=p5.length)
                                 {
                                   console.log(p2); 
                                   console.log('process comp');  
                                    console.log(p5); 
                                   console.log('process comp'); 
                                 }
                                 else if(p5.length<=p2.length)
                                 {
                                      console.log(p5); 
                                   console.log('process comp'); 
                                   console.log(p2); 
                                   console.log('process comp');
                                 }
                             }
         }
          else if(p5.length<=p1.length && p2.length && p4.length)
         {
            console.log(p5);
                            console.log('process comp');
                            console.log(p1);
                             console.log(p2);
                             console.log(p4);
                             if(p1.length<=p2.length && p4.length )
                             {
                                 console.log(p1);
                                 console.log('process comp');
                                 if(p2.length<=p4.length)
                                 {
                                   console.log(p2); 
                                   console.log('process comp');  
                                    console.log(p4); 
                                   console.log('process comp'); 
                                 }
                                 else if(p4.length<=p2.length)
                                 {
                                      console.log(p4); 
                                   console.log('process comp'); 
                                   console.log(p2); 
                                   console.log('process comp');
                                 }
                             }
                              else if(p2.length<=p1.length && p4.length )
                              {
                                console.log(p2);   
                                console.log('process comp');

                            console.log(p1);
                            console.log(p4); 
                            if(p1.length<=p4.length)
                            {
                                console.log(p1);  
                                console.log('process comp'); 
                                console.log(p4); 
                                console.log('process comp'); 
                            }
                            else if(p4.length<=p1.length)
                            {
                                console.log(p4); 
                                console.log('process comp');
                                console.log(p1);  
                                console.log('process comp');  
                            }

                              }
                              else if(p4.length<=p1.length && p2.length)
                              {
                                console.log(p4);
                                console.log('process comp');
                                console.log(p1);
                                console.log(p2);
                                if(p1.length<=p2.length)
                                {
                                    console.log(p1);
                                    console.log('process comp');
                                    console.log(p2);
                                    console.log('process comp');
                                }
                                else if(p2.length<=p1.length)
                                {
                                    console.log(p2);
                                    console.log('process comp');
                                    console.log(p1);
                                    console.log('process comp');
                                }
                              }
         }
     }
   else  if(p4.length<=p5.length && p4.length<= p3.length && p4.length<= p2.length && p4.length<= p1.length)
     {
        console.log(p4);
         console.log('process comp');
         
         console.log(p1);
         console.log(p2);
         console.log(p3);
         console.log(p5);
         if(p1.length<=p2.length && p3.length  && p5.length)
         {
           console.log(p1); 
           console.log('process comp'); 
            console.log(p2);
         console.log(p3);
         console.log(p5);
         if(p2.length<=p3.length && p5.length) 
         {
              console.log(p2);
               console.log('process comp'); 
                console.log(p3);
         console.log(p5);
         if(p3.length <= p5.length)
         {
              console.log(p3);
               console.log('process comp');
                console.log(p5);
                 console.log('process comp');
         }
         else if(p5.length <= p3.length)
         {
              console.log(p5);
                 console.log('process comp');
                  console.log(p3);
               console.log('process comp');
         }
         }
         }
         else if(p2.length<=p1.length && p3.length  && p5.length)
         {
             console.log(p2);
             console.log('process comp'); 
             console.log(p1); 
              console.log(p3);
         console.log(p5);
         if(p1.length<=p3.length && p5.length)
         {
             console.log(p1);
             console.log('process comp'); 
             console.log(p3);
             console.log(p5);
             if(p3.length<=p5.length)
             {
                console.log(p3);
                console.log('process comp'); 
                console.log(p5);
                console.log('process comp'); 
             }
             else if(p5.length<=p3.length)
             {
                console.log(p5);
                console.log('process comp');   
                console.log(p3);
                console.log('process comp');  
             }

         }
         else if(p3.length <=p1.length && p5.length)
         {
             console.log(p3);
             console.log("process completed");
             console.log(p1);
             console.log(p5);
             if(p1.length<=p5.length)
             {
                console.log(p1);
                console.log("process completed");
                console.log(p5);
                console.log("process completed");
             }
             else if(p5.length<=p1.length)
             {
                console.log(p5);
                console.log("process completed");
                console.log(p1);
                console.log("process completed");
             }

         }
         else if(p5.length <=p1.length && p3.length)
         {
            console.log(p5);
            console.log("process completed");
            console.log(p1);
            console.log(p3);
            if(p1.length<=p3.length)
            {
                console.log(p1);
                console.log('prpcess completed');
                console.log(p3);
                console.log('prpcess completed');
               
            }
            else if(p3.length<=p1.length)
            {
                console.log(p3);
                console.log('prpcess completed');
                console.log(p1);
                console.log('prpcess completed');
            }
         }
         }
          else if(p3.length<=p1.length && p2.length  && p5.length)
         {
             console.log(p3);
             console.log('process comp'); 
             console.log(p1); 
              console.log(p2);
         console.log(p5);
         if(p1.length<=p2.length   && p5.length)
         {
           console.log(p1); 
           console.log('process comp'); 
            console.log(p2);
         //console.log(p3);
         console.log(p5);
         if(p2.length <=p5.length)
         {
           console.log(p2);   
           console.log('process comp'); 
            console.log(p5);
             console.log('process comp'); 
         }
         else  if(p5.length <=p2.length)
         {
           console.log(p5);   
           console.log('process comp'); 
            console.log(p2);
             console.log('process comp'); 
         }
         }
         }
          else if(p5.length<=p1.length && p2.length  && p3.length)
         {
             console.log(p5);
             console.log('process comp'); 
             console.log(p1); 
              console.log(p2);
         console.log(p3);
         if(p1.length <= p2.length && p3.length)
         {
              console.log(p1); 
               console.log('process comp'); 
                console.log(p2);
         console.log(p3);
         if(p2.length <= p3.length)
         {
           console.log(p2); 
             console.log('process comp');   
               console.log(p3);
                 console.log('process comp'); 
         }
         else if(p3.length<=p2.length)
         {
              console.log(p3);
                 console.log('process comp'); 
                  console.log(p2); 
             console.log('process comp'); 
         }
         }
         else if(p2.length<=p1.length && p3.length)
         {
            console.log(p2); 
            console.log('process comp');
            console.log(p1);
            console.log(p3);
            if(p1.length<=p3.length)
            {
                console.log(p1);
                console.log('process comp');
                console.log(p3);
                console.log('process comp');
            }
            else if(p3.length<=p1.length)
            {
                console.log(p3);
                console.log('process comp');
                console.log(p1);
                console.log('process comp');
            }
         }
         else if(p3.length<=p1length && p2.length)
         {
            console.log(p3);
            console.log('process comp'); 
            console.log(p2); 
            console.log(p1);
            if(p2.length<=p1.length)
            {
                console.log(p2);  
                console.log('process comp');   
                console.log(p1);
                console.log('process comp'); 
            }
            else if(p1.length<=p2.length)
            {
                console.log(p1);
                console.log('process comp');  
                console.log(p2);  
                console.log('process comp');    
            }

         }
         }
     }
     else if(p5.length<=p4.length && p5.length<= p3.length &&  p5.length<= p2.length && p5.length<= p1.length)
     {
        console.log(p5);
        console.log('process comp');
       
        console.log(p1);
        console.log(p2);
        console.log(p3);
        console.log(p4);
           if(p1.length<=p2.length && p3.length && p4.length)
           {
            console.log(p1);
            console.log('process comp');
            console.log(p2);
            console.log(p3);
            console.log(p4);
            if(p2.length <=p3.length && p4.length)
            {
                console.log(p2);
                console.log('process comp');
                console.log(p3);
                console.log(p4);
                if(p3.length<=p4.length)
                {
                    console.log(p3);
                    console.log('process comp');
                    console.log(p4);
                    console.log('process comp');
                }
                else if(p4.length <= p3.length)
                {
                    console.log(p4);
                    console.log('process comp');
                    console.log(p3);
                    console.log('process comp');
                }
            }
            else if(p3.length <=p2.length && p4.length)
            {
                console.log(p3);
                console.log('process comp');
                console.log(p2);
                console.log(p4);
                if(p2.length<=p4.length)
                {
                    console.log(p2);
                    console.log('process comp');
                    console.log(p4);
                    console.log('process comp');
                }
                else if(p4.length <= p2.length)
                {
                    console.log(p4);
                    console.log('process comp');
                    console.log(p2);
                    console.log('process comp');
                }
            }
            else if(p4.length <=p2.length && p3.length)
            {
                console.log(p4);
                console.log('process comp');
                console.log(p2);
                console.log(p3);
                if(p2.length<=p3.length)
                {
                    console.log(p2);
                    console.log('process comp');
                    console.log(p3);
                    console.log('process comp');
                }
                else if(p3.length <= p2.length)
                {
                    console.log(p3);
                    console.log('process comp');
                    console.log(p2);
                    console.log('process comp');
                }
            }
            else if(p2.length<=p3.length && p4.length)
            {
                console.log(p2);
                console.log("process completed");
                console.log(p3);
                console.log(p4);
                if(p3.length<=p4.length)
                {
                    console.log(p3);
                    console.log("process completed");
                    console.log(p4);
                    console.log("process completed");
                }
                else if(p4.length<=p3.length)
                {
                    console.log(p4);
                    console.log("process completed");
                    console.log(p3);
                    console.log("process completed");
                }
            }
            else if(p4.length<=p3.length && p2.length)
            {
                console.log(p4);
                console.log('process completed');
                console.log(p3);
                console.log(p2);
                if(p3.length<=p2.length)
                {
                    console.log(p3);
                    console.log("process completed");
                    console.log(p2);
                    console.log("process completed");
                }
                else if(p2.length<=p3.length)

                {
                    console.log(p2);
                    console.log("process completed");
                    console.log(p3);
                    console.log("process completed");
                }

            }


           }
     
     }
    /* var p=[size,size1,size2,size3,size4]
    for(var i=1;i<=5;i++)
     {
        for(var j=i+1;j<=5;j++)
        {
            
            if(p[i]<=p[j])
            {
                
               continue;
            }
            else if(p[j]<=p[i])
            {
                continue;
                  
            }*/
       // }
     /*var temp;
  
  
    var p=[size,size1,size2,size3,size4];
    var l=[p1,p2,p3,p4,p5];

   for(i=0;i<=5;i++)
   {
       swap=0;
       for(j=0;j<(5-i);j++)
       {
           if(p[j]>p[j+1])
           {
              
          temp=p[j] ;
          p[j]=p[j+1];
          p[j+1]=temp;
         swap=1;
         
                }
                
       }
        
       if(swap==0)
       {
           break;
       }
         console.log('process of length '+p[i]+'completed');
   

  
   
}
       
      // console.log(p[i]);
    
   //console.log( p[m]);
     // for(i=0;i<p[m];i++)
      //{
         
      //  }
        
      

 //  }
      // console.log(p[i]);


   
   for(i=0;i<5;i++)
   {
    console.log('process of array of length '+p[i]+'completed');
    if(p[i]!=p[i+1] && p[i]==size )
    {
       console.log(p1);
        //console.log(l[i]);
    }
   else if( p[i]==size1 && p[i]!=p[i+1])
    {
        console.log(p2);
      // console.log(l[i]);
       // console.log(p3);
    }
    else if( p[i]==size2 && p[i]!=p[i+1] )
    {
        console.log(p3);
       //console.log(l[i]);
      ///  console.log(p4);
    }
    else if(p[i]==size3 && p[i]!=p[i+1] )
    {
        console.log(p4);
      //console.log(l[i]);
       // console.log(p5);
    }
    else if(p[i]==size4 && p[i]!=p[i+1] )
    {
        
       console.log(p5);
       // console.log(p1);
    }
   
  }*/

      
   
  
