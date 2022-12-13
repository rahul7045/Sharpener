import './ExpenseForm.css'
const ExpenseForm =()=>{
   const submitHandler =(e)=>{
      e.preventDefault();  
    const title = document.getElementById('title').value
    const amount = document.getElementById('amount').value
    const date = document.getElementById('date').value
     console.log(title)
     console.log(amount)
     console.log(date)


   }
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="title"> Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter Title" />
                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="number" class="form-control" id="amount" placeholder="Amount" />
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" />
                </div>
                <button onClick={submitHandler} type="submit" class="button-form">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm