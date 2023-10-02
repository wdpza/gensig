import React, {useState} from "react";
import { useForm } from "react-hook-form";

const SignatureGenerator = () => {
  const { register, handleSubmit } = useForm();
  const [downloadUrl, setDownloadUrl] = useState(null);

  const generateSignature = (data) => {
    const { name, role, tel, mobile, email, websiteUrl, websiteDisplay, bannerImage } = data;

    const logoSrc =  'https://brandwagon.co.za/wp-content/uploads/2021/09/BrandWagon_Logo_Newsletter-1-1.png';

    const signatureHTML = `     
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>

    <head>
        <title>Brandwagon</title>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    </head>

    <body>
        <table 
            id="signature" 
            cellpadding="0" 
            cellspacing="0" 
            border="0" 
            style="font-family: sans-serif; 
                line-height: 1.5; 
                box-sizing: initial; 
                max-width: 624px; 
                color: #0f4380; 
                border-collapse: collapse;"
            >
            <tr>
                <td valign="top" style="white-space: nowrap;" nowrap>
                    <table 
                        id="basic-table" 
                        width="624" 
                        cellpadding="0" 
                        cellspacing="0" 
                        border="0" 
                        style="font-family: sans-serif; 
                            line-height: 15px; 
                            width: 624px; 
                            border-collapse: collapse; 
                            color: #0f4380;">
                        <tr>
                            <td valign="top" width="230" style="padding-right: 0px;">
                                <p style="margin: 0.75pt; line-height: 0px;">
                                    <a href="http://brandwagon.co.za/">
                                        <img 
                                            width="232" 
                                            height="91" 
                                            alt="" 
                                            src="${ logoSrc }"
                                            style="border: 0;display: block;border-radius: 0px;padding-top:35px;margin: 0 auto;width: 200px;height: auto;" 
                                        />
                                    </a>
                                </p>
                            </td>
                            <td valign="top" width="293" basic.image style="padding-bottom: 12px; padding-top: 24px;">
                                <table 
                                    cellpadding="0" 
                                    cellspacing="0" 
                                    border="0" 
                                    width="293" 
                                    style="font-family: sans-serif; line-height: 15px; width: 293px; border-collapse: collapse; color: #0f4380; border-left: solid 1px #18171d; padding-left:15px;"
                                    >
                                    <tr>
                                        <td valign="top" style="padding-bottom: 8px;white-space: nowrap; padding-left:15px;" nowrap>
                                            <p style="margin: 0.75pt; color: #282828; font-size: 18px; font-family: Arial, sans-serif;">
                                                <span style="letter-spacing: 2px;">${ name }</span>
                                            </p>
                                            <p style="margin: 0.75pt; padding-top: 3px; color: #4b6caf; ">
                                            <span style="font-size: 14px; font-weight: 300; font-style: italic; letter-spacing: 1px;">${ role }</span>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" style="white-space: nowrap; padding-left:15px;" nowrap>
                                            <p style="margin: 0.75pt; font-size: 12px; font-family:  Helvetica, Arial, sans-serif;font-weight: 300;">
                                                <span style="color: #4b6caf; font-style:italic;">t.</span>
                                                <span>&nbsp;&nbsp;&nbsp;</span>
                                                <a href="tel:+27 ${ tel }" style="text-decoration: none; color: #282828; letter-spacing: 1px;">+27 ${ tel }</a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" style="white-space: nowrap; padding-left:15px;" nowrap>
                                            <p style="margin: 0.75pt; font-size: 12px; font-family: Arial, sans-serif;">
                                                <span style="color: #4b6caf; font-style:italic;">m.</span>
                                                <span>&nbsp;</span>
                                                <a href="tel:+27 ${ mobile }" style="text-decoration: none; color: #282828; letter-spacing: 1px;">+27 ${ mobile }</a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" style="white-space: nowrap; padding-left:15px;" nowrap>
                                            <p style="margin: 0.75pt; font-size: 12px; font-family: Arial, sans-serif;">
                                                <span style="color: #4b6caf; font-style:italic;">e.</span>
                                                <span>&nbsp;&nbsp;&nbsp;</span>
                                                <a href="mailto:${ email }" style="text-decoration: none; color: #282828; letter-spacing: 1px;">${ email }</a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" style="white-space: nowrap; padding-top: 0px; padding-left:15px;" nowrap>
                                            <p style="margin: 0.75pt; font-size: 12px; font-family: Arial, sans-serif;">
                                                <span style="color: #4b6caf; font-style:italic;">w.</span>
                                                <span>&nbsp;&nbsp;&nbsp;</span>
                                                <a href="${ websiteUrl }" style="text-decoration: none; color: #282828; letter-spacing: 1px;">${ websiteDisplay }</a>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td valign="top" style="white-space: nowrap;" nowrap>
                    <a href="${ websiteUrl }"><img width="624" height="98" src="${ bannerImage }"></a>
                </td>
            </tr>
            <tr>
                <td valign="top" align="left" style="padding-top:20px;">
                    <p style="margin: 0.75pt; font-size: 8px; font-family: Arial, sans-serif;font-weight: 600; color:#d1d4d3;">
                        Please consider the environment before printing this e-mail.
                    </p>
                    <p style="margin: 0.75pt; font-size: 8px; font-family:  Helvetica, Arial, sans-serif;font-weight: 400; color:#d1d4d3;">
                        This email and any attachments to it may be confidential and are intended solely for the use of the individual to whom it is addressed. Any views or opinions expressed are solely those of the author and do not necessarily represent those of Brandwagon. If you are not the intended recipient of this email, you must neither take any action based upon its contents, nor copy or show it to anyone. Please contact the sender if you believe you have received this email in error.
                    </p>
                </td>
            </tr>

        </table>
    </body>

    </html>
    `;

    // Create a Blob from the HTML string
    const blob = new Blob([signatureHTML], { type: "text/html" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Update state with the new download URL
    setDownloadUrl(url);
  };

  return (
    <div>
        <form onSubmit={handleSubmit(generateSignature)} className="space-y-4 mb-5">
            <input {...register("name")} placeholder="Name" className="p-2 w-full border rounded text-slate-600" />
            <input {...register("role")} placeholder="Role" className="p-2 w-full border rounded text-slate-600" />
            <input {...register("tel")} placeholder="Telephone" className="p-2 w-full border rounded text-slate-600" />
            <input {...register("mobile")} placeholder="Mobile" className="p-2 w-full border rounded text-slate-600" />
            <input {...register("email")} placeholder="Email" className="p-2 w-full border rounded text-slate-600" />
            <input {...register("websiteUrl")} placeholder="Website URL" className="p-2 w-full border rounded text-slate-600" value="https://brandwagon.co.za" />
            <input {...register("websiteDisplay")} placeholder="Website Display Name" className="p-2 w-full border rounded text-slate-600" value="brandwagon.co.za" />
            <input {...register("bannerImage")} placeholder="Banner Image URL" className="p-2 w-full border rounded text-slate-600" value="https://brandwagon.co.za/images/sig-banner.png" />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Generate Signature
            </button>
        </form>
        {downloadUrl && (
        <a href={downloadUrl} download="signature.html" className="p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600">
            Download Signature
        </a>
        )}
    </div>
  );
};

export default SignatureGenerator;
