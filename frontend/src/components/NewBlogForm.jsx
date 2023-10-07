const NewBlogForm = ({
  handleCreateNewBlog,
  titleValue,
  handleTitleChange,
  authorValue,
  handleAuthorChange,
  urlValue,
  handleUrlChange,
}) => {
  return (
    <form onSubmit={handleCreateNewBlog}>
      <h2>create new</h2>
      <div>
        title:{' '}
        <input
          type="text"
          name="title"
          value={titleValue}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        author:{' '}
        <input
          type="text"
          name="author"
          value={authorValue}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        url:{' '}
        <input
          type="text"
          name="url"
          value={urlValue}
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewBlogForm;
