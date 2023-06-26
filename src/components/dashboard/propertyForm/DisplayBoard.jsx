export default function DisplayBoard({propertyData}) {
    console.log(propertyData);
    const {createdText,imageUrl} = propertyData || {};
  return (
    <div className="p-5">
      <div>
        <img className="w-full aspect-square" src={imageUrl} alt="" />
      </div>
      <div>
        <p>{createdText}</p>
      </div>
    </div>
  )
}
