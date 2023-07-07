import JsxParser from "react-jsx-parser";

export default function JsxToImage({ jsxRef, jsxData }) {

  return (
    <section ref={jsxRef} className="block rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] aspect-auto">
      <JsxParser jsx={jsxData} />
    </section>
  )
}