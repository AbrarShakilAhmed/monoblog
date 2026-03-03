const container = document.querySelector('.container')

fetch('http://127.0.0.1:3000/blog-data')
  .then((res) => res.json())
  .then((data) => {
    if (data.length > 0) {
      data.map((e) => {
        const postContainer = document.createElement('div')
        postContainer.classList = 'post-container'
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        h2.innerText = e.title
        p.innerText = e.post

        postContainer.append(h2, p)

        container.append(postContainer)
      })
    }
  })
