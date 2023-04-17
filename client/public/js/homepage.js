const newPostBtn = $('#new-post-btn');
const newPostBtnContainer = $('.new-post-btn-container');
const submitBtn = $('#submit-btn');
const cancelBtn = $('#cancel-btn');
const newBlogContainer = $('#new-blog-container');

// Create prompts for the user to enter a title and content for the new blog post
const showNewBlogPost = () => {
  newBlogContainer.removeClass('hidden'); 
  newPostBtnContainer.addClass('hidden');
}

const hideNewBlogPost = () => {
  newBlogContainer.addClass('hidden');
  newPostBtnContainer.removeClass('hidden');
}

const newPostHandler = async (event) => {
  event.preventDefault();
  const title = $('#title').val().trim();
  const contents = $('#content').val().trim();
  if (title && contents) {
    const response = await fetch('/api/blogpost', {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to create blog post');
    }
  }
}

newPostBtn.click( showNewBlogPost );
cancelBtn.click( hideNewBlogPost );
submitBtn.click( newPostHandler );