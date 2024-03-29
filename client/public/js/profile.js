const deleteBtn = $('.delete-emoji');

const deletePostHandler = async (event) => {
  event.preventDefault();

  const target = event.target;
  const blogpostID = target.getAttribute('data-id');

  fetch(`/api/blogpost/${blogpostID}`,
    {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.message === 'Success! Deleted the post.') {
        document.location.reload();
      }
    })
    .catch((err) => console.log(err));
};

deleteBtn.click(deletePostHandler);