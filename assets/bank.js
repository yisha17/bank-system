function bank(){
    var service = prompt("what service do you want? \n 1)Deposit money? \n 2)Withdraw money? \n 3)See your Balance? \n 4)Transefer money?");

    var bal= 10000;
   
    switch (service){
        case "1":
            deposit();
            break;
        case "2":
            withdraw();
            break;
        case "3":
            balance();
            break;
        case "4":
            transfer();
            break;
        default:
            alert("Enter correct number to get service!");            
    }

    function deposit(){
        let deposit = parseInt(prompt("how much money you want to deposit?"));

        bal += deposit;


        alert("Your current balance is " + bal);
    }

    function withdraw(){
        let withdraw = parseInt(prompt("how much money you want to withdraw?"));

        if (bal - withdraw <= 25){
            alert("dear customer,You dont have efficient balance.");
        }else{
            bal -= withdraw;

            alert("Dear customer, your current balance is "+ bal);
        }

    }

    function balance(){

        alert("Dear customer, your balance is "+ bal);
    }

    function transfer(){

        prompt("Dear customer, enter account number?")
        let transfer = parseInt(prompt("how much money you want to transfer?"));

        if (bal - transfer <= 25){
            alert("dear customer,You dont have efficient balance.");
        }else{
            bal -= transfer;

            alert("Dear customer, your current balance is "+ bal);
        }






    }

   
}
bank();