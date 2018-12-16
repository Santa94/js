
const a = parseFloat(prompt('a')) ;
const b = parseFloat(prompt('b')) ;
const c = parseFloat(prompt('c')) ;
function solveQuadrEq (a, b, c) {
    const D = b*b - 4*a*c ;
    
    if (D>0) {
        x1=(-b+Math.sqrt(D))/(2*a);
        x2=(-b-Math.sqrt(D))/(2*a);
        return   'This equation has 2 solutions :  x1= ' + x1 + ', x2= ' + x2;
    } else if (D==0) {
        x1=-b/(2*a) ;
        return 'This equation has one solution : x12= ' + x; 
    } else if (D<0) 
      return 'This equation has no real solutions'  
    }
     alert (solveQuadrEq(a,b,c,)) ;
    
    


