 class Answers_Practice {
    
    public static void main (String args[]){
        int a = -7,b=0,c=7,d=153,e=37473;
        int []arr={2,0,7,4,3,9,88};
        int arr1[]={3,7,14,31,49,100};

        Practice o = new Practice();
        //Q1
        o.check();
        //Q2
        o.evenOdd(a);
        //Q3
        o.sumNo(arr);
        //Q4
        o.max3(a,b,c);
        //extra
        int var =o.maxAll(4,63,6,325,53,9,-4,-30);
        System.out.println(var+"  is maximum among all");
        //Q5
        o.LeapYear(2013);
        //Q6
        System.out.println(o.isPrime(4));
        //Q7
        System.out.println(o.PrimeCount(2,4,7,2,6,13,19));

        //Q8
        System.out.println(o.sumofDigi(122));
        //Q9
        System.out.println(o.Rev(123));
        //Q10
        System.out.println(o.Palindrom(121));


        //Practice o2 = new Practice();
    //     int abc=Practice.maxAll(3,21,4,64,1,4,-1,-1999);
    // System.out.println(abc);
    }

}