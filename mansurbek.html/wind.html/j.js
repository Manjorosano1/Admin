fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const summaryTableItems = document.querySelectorAll('.summary-table__item');
        summaryTableItems.forEach((item, index) => {
          const category = item.querySelector('.category-types h4');
          const icon = item.querySelector('.category-types img');
          const score = item.querySelector('.score1');
    
          category.textContent = data[index].category;
          icon.src = data[index].icon;
          score.textContent = data[index].score;
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

const category = document.getElementById('category');
const icon = document.getElementById('icon');
const score = document.getElementById('score');

const btn = document.querySelector('.continue-button')

btn.addEventListener(('click'), () =>{
    btn.classList.toggle('active')
})