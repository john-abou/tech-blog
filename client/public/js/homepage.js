const newPostBtn = $('#new-post-btn');
const submitBtn = $('#submit-btn');

// Create prompts for the user to enter a title and content for the new blog post
const blogpostPrompt = () => {
  const titleInput = $('<input>').attr('id', 'title');
  const contentInput = $('<textarea>').attr('id', 'content');
  const submitBtn = $('<button>').attr('id', 'submit-btn').text('Submit');

  // Style the prompts with bootstrap
  titleInput.addClass('form-control mt-3 mb-1 mx-auto col-12 shadow-lg border border-dark rounded');
  titleInput.attr('placeholder', 'Blog title...');
  contentInput.addClass('form-control mt-3 mb-5 col-12 mx-auto shadow-lg border border-dark rounded');
  contentInput.attr('placeholder', 'Blog content...');
  contentInput.attr('rows', '5');
  contentInput.attr('maxlength', '10000')
  submitBtn.addClass('btn btn-primary mt-5 col-12 mx-auto shadow-lg border border-dark rounded');

  // Empty all the content in the homepage and load the prompts
  const blogpostHeader = $('#blogpost-header');
  const blogpostContainer = $('#blogposts-container');
  blogpostHeader.empty();
  blogpostContainer.empty();
  blogpostHeader.append(titleInput, contentInput, submitBtn);

  // Add event listener to the submit button
  submitBtn.click( newPostHandler );
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

newPostBtn.click( blogpostPrompt );