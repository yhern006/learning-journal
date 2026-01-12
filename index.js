
const viewMoreBtn = document.getElementById('view-more-btn')
const hiddenArticles = document.getElementsByClassName('more-article')

viewMoreBtn.addEventListener('click', function(){
    for(let article of hiddenArticles){
        article.style.display = 'block'
        viewMoreBtn.style.display = 'none'
    }
})