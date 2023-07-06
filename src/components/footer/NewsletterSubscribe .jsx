import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const url = import.meta.env.VITE_REACT_APP_PUBLIC_MAILCHIMP_URL;
export default function NewsletterSubscribe () {
  return (
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <NewsletterForm status={ status }
            message={ message }
            onSubmitted={formData => subscribe(formData)} />
      </div>
    )}
  />
  )
}
