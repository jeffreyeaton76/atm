$(document).ready(function() {

var checkingBalance = $("#checkingBalance");
var checkingInput = $("#checkingInput");
var savingsBalance = $("#savingsBalance");
var savingsInput = $("#savingsInput");
var newCheckingTotal = 0;
var newSavingsTotal = 0;

var checkingDeposit = function(amount){
  amount.preventDefault();
  var checkingInputValue = parseInt(checkingInput.val());
  if (checkingInputValue > 0) {
    checkingBalance.removeClass("zero");
  }
  newCheckingTotal = newCheckingTotal + checkingInputValue;
  checkingBalance.html("$" + (newCheckingTotal));
  checkingInput.val("");
};

function checkingWithdrawal(amount){
  amount.preventDefault();
  var checkingInputValue = parseInt(checkingInput.val());
  if (checkingInputValue > newCheckingTotal) {
    if ((newSavingsTotal - (checkingInputValue - newCheckingTotal)) >= 0) {
      newSavingsTotal = newSavingsTotal - (checkingInputValue - newCheckingTotal);
      newCheckingTotal = 0;
      checkingBalance.addClass("zero");
      if (newSavingsTotal === 0){
        savingsBalance.addClass("zero");
      }
      checkingBalance.html("$" + (newCheckingTotal));
      savingsBalance.html("$" + (newSavingsTotal));
      checkingInput.val("");
    }
    else {
      checkingInput.val("");
    }
  }
  else {
    newCheckingTotal = newCheckingTotal - checkingInputValue;
    checkingBalance.html("$" + (newCheckingTotal));
    checkingInput.val("");
    if (newCheckingTotal === 0){
      checkingBalance.addClass("zero");
    }
  }
}

function savingsDeposit(amount){
  amount.preventDefault();
  var savingsInputValue = parseInt(savingsInput.val());
  if (savingsInputValue > 0) {
    savingsBalance.removeClass("zero");
  }
  newSavingsTotal = newSavingsTotal + savingsInputValue;
  savingsBalance.html("$" + (newSavingsTotal));
  savingsInput.val("");
}

function savingsWithdrawal(amount){
  amount.preventDefault();
  var savingsInputValue = parseInt(savingsInput.val());
  if (savingsInputValue > newSavingsTotal) {
    if ((newCheckingTotal - (savingsInputValue - newSavingsTotal)) >= 0) {
      newCheckingTotal = newCheckingTotal - (savingsInputValue - newSavingsTotal);
      newSavingsTotal = 0;
      savingsBalance.addClass("zero");
      if (newCheckingTotal === 0){
        checkingBalance.addClass("zero");
      }
      savingsBalance.html("$" + (newSavingsTotal));
      checkingBalance.html("$" + (newCheckingTotal));
      savingsInput.val("");
    }
    else {
      savingsInput.val("");
    }
  }
  else {
    newSavingsTotal = newSavingsTotal - savingsInputValue;
    savingsBalance.html("$" + (newSavingsTotal));
    savingsInput.val("");
    if (newSavingsTotal === 0){
      savingsBalance.addClass("zero");
    }
  }
}
$("#checkingDepositButton").on("click", checkingDeposit);
$("#checkingWithdrawalButton").on("click", checkingWithdrawal);
$("#savingsDepositButton").on("click", savingsDeposit);
$("#savingsWithdrawalButton").on("click", savingsWithdrawal);
});
