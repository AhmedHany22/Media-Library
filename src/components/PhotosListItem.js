function PhotosListItem({ photo }) {
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
    </div>
  );
}

export default PhotosListItem;
