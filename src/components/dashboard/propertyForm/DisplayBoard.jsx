import jsPDF from "jspdf";

export default function DisplayBoard({ propertyData }) {
  console.log(propertyData);
  const { createdText, imageUrl } = propertyData || {};
  
const pdfGenerateTest = () =>{
  const doc = new jsPDF();
  doc.addImage(`${imageUrl}`,"JPEG", 15, 15, 180, 150);
     // Calculate available width on the page
  const pageWidth = doc.internal.pageSize.getWidth();
  const rightMargin = 15;
  const availableWidth = pageWidth - rightMargin * 2; // Subtract twice the right margin for even spacing
  const splitDesc = doc.splitTextToSize(`${createdText}`, availableWidth);
  doc.setFontSize(12);
  doc.text(splitDesc, rightMargin, 180, null, null, "left");
  doc.save("a4.pdf");
}
  return (
    <div className="p-5">
      <div>
        <div>
          <img className="w-full aspect-square" src={imageUrl} alt="" />
        </div>
        <div>
          <p>{createdText}</p>
        </div>
      </div>
      <div className="flex justify-between items-center py-5">
      <div className="mt-4 btn-warning cursor-pointer" onClick={pdfGenerateTest}>Download PDF</div>
      </div>
    </div>
  );
}
