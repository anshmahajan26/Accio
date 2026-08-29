//!check Pos or neg
 public class Practice{
   public void check(){
        int num = 0;
        if (num==0){
            System.out.println("zero is neither +ve  nor -ve");
        }
        else if(num>0){
            System.out.println("positive");
        }else{
            System.out.println("Negative");
        }
    }

    public void evenOdd(int num){
      
        if(num%2==0){
            System.out.println("even");
        }else{
             System.out.println("odd");
        }
    }

    public  void sumNo(int arr[]){
        int sum =0;
        for(int i =0; i<arr.length; i++){
            sum+= arr[i];
        }
        System.out.println(sum);
    }

    public  void max3(int num1,int num2,int num3){
        if((num1>num2)&& (num1>num3)){
            System.out.println("num1 is max");
        }
        else if((num2>num1) && (num2>num3)){
             System.out.println("num2 is max");
        }
        else {
             System.out.println("num3 is max");
        }
    }

    public  int maxAll(int...numbers){
        int max = numbers[0];
        for(int i=1; i<numbers.length; i++){
            if(numbers[i]>max){
                max=numbers[i];
            }
        }
        return max;
    }

    public  void LeapYear(int year){
        if(year%400==0){
            System.out.println("leap year");
        }else if(year % 4 ==0 && year % 100!=0){
            System.out.println("leap year");
        }else{
            System.out.println("NOT leap year");
        }
    }

    public  boolean isPrime(int num){
        boolean prime = true;
      if(num == 1){
        return false;
      }else if(num ==2){
        return prime;
      }else{

      for(int i =2; i<=(num/2); i++){
        if(num % i==0){
            prime= false;
            break;
        }
        }
      }
      return prime;
    }

    public int PrimeCount(int...number){
        int count =0;
        for(int i =0; i<number.length; i++){
            if(isPrime(number[i])){
                count++;
            }
        }
        return count;
    }
    public int sumofDigi(int num){
        int sum =0;
        while(num>0){
            int digiLast = num % 10;
            num = num/10;
            sum+=digiLast;
        }
        return sum;
    }
//Rev digit directly 
    public int Rev(int num){
        int rev = 0, rem;
        while(num>0){
            rem = num%10;
            rev = rev*10+rem;
            num = num/10;
        }
        return rev;
    }
//find palindrom of number digit
    public boolean Palindrom(int num){
        if(Rev(num)==num){
            return true;
        }else{
            return false;
        }
    }
//find palindorm of String
    public boolean PalindromStr(String str){
        
    }


}
