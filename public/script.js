const deleteButtons = document.querySelectorAll(".delete-btn");
const searchInput = document.getElementById("searchInput");
const postsContainer = document.querySelector(".grid");
let link=document.querySelectorAll(".actions .btn");
let articles=document.querySelectorAll('.card')
const posts = Array.from(postsContainer.children);
let searched_posts=[...posts]
const sortSelect = document.getElementById("sortSelect");
//handle delete
deleteButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    const postId = e.target.dataset.id;
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const postElement = document.getElementById(`post-${postId}`);
        console.log(response);
        postElement.remove();

      } else {
        alert("Failed to delete the post. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post.");
    }
  });
});
link.forEach(item=>item.addEventListener('click',e=>{
   e.stopPropagation();
}))
articles.forEach(item=>item.addEventListener('click',()=>{
   window.location.href=`/posts/${item.dataset.id}`
}))
//sort by date
sortSelect.addEventListener("change", () => {
  const sortOption = sortSelect.value;
  console.log(sortOption);
  searched_posts.sort((a, b) => {
    const dateA = new Date(a.querySelector("small").dataset.date);
    const dateB = new Date(b.querySelector("small").dataset.date);
    console.log(dateA,dateB);
    return sortOption === "newest" ? dateB - dateA : dateA - dateB;
  });

  postsContainer.innerHTML = "";
  searched_posts.forEach((post) => postsContainer.appendChild(post));
});

let timer;//debounce
searchInput.addEventListener('input',(e)=>{
   clearTimeout(timer);
   timer=setTimeout(()=>{
    let key=e.target.value;
     searched_posts=posts.filter(el=>{
         let title=el.querySelector('h3').innerText;
         let description=el.querySelector('p').innerText;
         return new RegExp(key,'i').test(title) || new RegExp(key,'i').test(description)
      })
      postsContainer.innerHTML = "";
      searched_posts.forEach((post) => postsContainer.appendChild(post));
   },500)
})