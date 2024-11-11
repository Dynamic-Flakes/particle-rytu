'use client';

import { useIsMounted } from "@/hooks/use-is-mounted";

import Image from '@/components/shared/image';
import infoIcon from '@/assets/images/cert/info-icon.svg';
import verifyQRCode from '@/assets/images/cert/verify-qrcode.svg';
import { VerificationData } from "@/data/static/verification";
import LogoIcon from "@/components/shared/logo-icon";
import VerifiedBadge from "@/components/shared/verified-badge";
import Button from "@/components/shared/button";

function Certificate() {
    return (
        <main>
            <section className="max-w-screen-xl mt-8 mx-auto px-4 xl:px-0 font-mono">
                <div className="border border-gray-500 dark:border-dashed ">

                    <div className="border-gray-500 dark:border-dashed  border-b block lg:hidden">
                        <div className="grid place-items-center text-center p-4 gap-4 h-full">
                            <span className="w-[80px] h-[80px] block">
                                <VerifiedBadge />
                            </span>
                            <span className="font-bold text-xs">This data has been verified by RightToUse</span>
                            <div className="w-[100px] bg-white">
                                <Image src={verifyQRCode} alt=""/>
                            </div>
                            <div className="font-bold text-xs">Unique QR code to view this certificate.</div>
                        </div>
                    </div>

                    <div className="lg:grid grid-cols-[auto_200px]">
                        <div>
                            <div className="lg:grid grid-cols-[75%_auto]">
                                <div className="p-4">
                                <h1 className="text-3xl lg:text-5xl font-bold mb-4 dark:text-[var(--color-accent)]">Verification Certificate</h1>
                                <p>This verification certificate proves the authenticity and ownership of the hashed data.</p>
                                </div>
                                <div className="border-gray-500 dark:border-dashed  border-t lg:border-t-0 lg:border-l">
                                <section id="metadata" className="p-4">
                                    <div className="text-center lg:text-left">
                                    <span className="text-left cursor-help tooltip tooltip-bottom underline decoration-dotted underline-offset-2" data-tip="The current time and date since this page was loaded by the current user.">
                                        <span className="uppercase text-xs font-bold">Current time and date</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                    </span>
                                    <p className="text-sm">2024-10-29T23:18:37.411Z</p>
                                    </div>
                                </section>
                                </div>
                            </div>
                            <div className="border-gray-500 dark:border-dashed  border-t">
                                <div className="lg:grid grid-cols-2 print:grid-cols-1">
                                <div className="lg:grid grid-cols-[170px_auto] text-center lg:text-left">
                                    <div className="lg:grid place-items-center justify-items-start p-4 pb-0 lg:pb-4">
                                    <span className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2" data-tip="The unique identifier for this certificate.">
                                        <span className="uppercase text-xs font-bold">Certificate ID</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                    </span>
                                    </div>
                                    <div className="border-gray-500 dark:border-dashed  lg:border-l lg:grid place-items-center p-4 pt-0 lg:pt-4 text-sm">0fcd1965-705e-47ed-839b-422e40aee98e</div>
                                </div>
                                <div className="lg:grid grid-cols-[150px_auto] print:hidden text-center lg:text-left">
                                    <div className="border-gray-500 dark:border-dashed  border-t lg:border-t-0 lg:border-l lg:grid place-items-center justify-items-start p-4 pb-0 lg:pb-4">
                                    <span className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2" data-tip="Actions you can perform on this certificate.">
                                        <span className="uppercase text-xs font-bold">Actions</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                    </span>
                                    </div>
                                    <div className="border-gray-500 dark:border-dashed  lg:border-l grid place-items-center p-4">
                                    <div className="flex gap-4 mx-auto lg:w-full">
                                        <Button className="dark:bg-[rgba(50,55,67,1)]">Validate</Button>
                                        <Button className="dark:bg-[rgba(50,55,67,1)]">Print PDF</Button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="border-gray-500 dark:border-dashed  border-t">
                                <div className="lg:grid grid-cols-2">
                                <div className="lg:grid grid-cols-2 text-center lg:text-left">
                                    <div className="lg:grid grid-cols-1">
                                    <div className="p-4">
                                        <span className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2" data-tip="The time in which the certificate is fully created.">
                                        <span className="uppercase text-xs font-bold">Created at</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                        </span>
                                    </div>
                                    <div className="border-gray-500 dark:border-dashed  lg:border-t p-4 pt-0 lg:pt-4 lg:min-h-[130px]">
                                        <div>
                                        <span className="flex gap-2 items-center">
                                            <span className="text-sm">
                                                <span className="mr-2">Friday, April 26, 2024 at 9:38:29 AM</span>
                                                <span className="inline-block">
                                                    by info@righttouse.com
                                                    <span className="hidden lg:inline-block"><LogoIcon /></span>
                                                </span>
                                            </span>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="lg:grid grid-cols-1 border-gray-500 dark:border-dashed  lg:border-l border-t lg:border-t-0">
                                    <div className="p-4">
                                        <span className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2" data-tip="The type of certificate. Either a file upload or plain text upload.">
                                        <span className="uppercase text-xs font-bold">Certificate Type</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                        </span>
                                    </div>
                                    <div className="border-gray-500 dark:border-dashed  lg:border-t p-4 pt-0 lg:pt-4 lg:min-h-[130px]">Plain Text Upload</div>
                                    </div>
                                </div>
                                <div className="lg:grid grid-cols-2 text-center lg:text-left">
                                    <div className="lg:grid grid-cols-1 border-gray-500 dark:border-dashed  lg:border-l border-t lg:border-t-0">
                                    <div className="p-4">
                                        <span className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2" data-tip="The version of the certificate in a chain. The more versions, the better the integrity of the certificate.">
                                        <span className="uppercase text-xs font-bold">Version</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                        </span>
                                    </div>
                                    <div className="border-gray-500 dark:border-dashed  lg:border-t p-4 pt-0 lg:pt-4 lg:min-h-[130px]">
                                        <p>
                                        <a className="link underline underline-offset-4 link-hover" title="view-the-previous-certificate-version" href="/certificate/a4b3bdb1-9f0f-4de0-82f2-65dd179a6939">3</a>
                                        </p>
                                    </div>
                                    </div>
                                    <div className="lg:grid grid-cols-1 border-gray-500 dark:border-dashed  lg:border-l border-t lg:border-t-0">
                                    <div className="p-4">
                                        <span className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2" data-tip="The time in which the certificate is fully created in the blockchain.">
                                        <span className="uppercase text-xs font-bold">Speed Created</span>
                                        <Image alt="tooltip icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="inline-block align-text-middle ml-1" src={infoIcon} style={{ color: 'transparent' }} />
                                        </span>
                                    </div>
                                    <div className="border-gray-500 dark:border-dashed  lg:border-t p-4 pt-0 lg:pt-4 lg:min-h-[130px]">
                                        <p>
                                        <span className="mr-2">5s</span>
                                        <span className="hidden lg:inline-block text-sm">
                                            by blockchain@righttouse.com
                                            <LogoIcon />
                                        </span>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-gray-500 dark:border-dashed  lg:border-l border-t lg:border-t-0 hidden lg:block">
                            <div className="grid place-items-center text-center p-4 gap-4 h-full">
                                <span className="w-[80px] h-[80px] block">
                                    <VerifiedBadge />
                                </span>
                                <span className="font-bold text-xs">This data has been verified by RightToUse</span>
                                <div className="w-[100px] bg-white">
                                    <Image 
                                    src={verifyQRCode}
                                    alt="QR Code"
                                    />
                                </div>
                                <div className="font-bold text-xs">Unique QR code to view this certificate.</div>
                            </div>
                        </div>
                    </div>

                    <div className="border-gray-500 dark:border-dashed  border-t">
                        <div className="lg:grid grid-cols-2 text-center lg:text-left">
                            <div className="lg:grid grid-cols-1">
                            <div className="p-4">
                                <span
                                className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2"
                                data-tip="The public URL of the certificate on the internet."
                                >
                                <span className="uppercase text-xs font-bold">Public Ledger URL</span>
                                <Image
                                    alt="tooltip icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    className="inline-block align-text-middle ml-1"
                                    src={infoIcon}
                                />
                                </span>
                            </div>
                            <div className="border-gray-500 dark:border-dashed  lg:border-t p-4 pt-0 lg:pt-4 lg:min-h-[100px]">
                                <div className="text-ellipsis overflow-hidden">
                                <a
                                    className="font-bold underline underline-offset-2 text-xs dark:text-[var(--color-accent)]"
                                    href="/certificate/0fcd1965-705e-47ed-839b-422e40aee98e"
                                >
                                    https://explorer.xrplevm.org/address/0xe570834499390BF03ceA4b63F20a02f374F535b8?tab=txs
                                </a>
                                </div>
                            </div>
                            </div>

                            <div className="lg:grid grid-cols-1 border-gray-500 dark:border-dashed  lg:border-l border-t lg:border-t-0">
                            <div className="p-4">
                                <span
                                className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2"
                                data-tip="The public URL of the certificate on the blockchain."
                                >
                                <span className="uppercase text-xs font-bold">Public Blockchain URL</span>
                                <Image
                                    alt="tooltip icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    className="inline-block align-text-middle ml-1"
                                    src={infoIcon}
                                />
                                </span>
                            </div>
                            <div className="border-gray-500 dark:border-dashed  lg:border-t p-4 pt-0 lg:pt-4 lg:min-h-[100px]">
                                <span className="dragon-ellipsis-2 break-all">
                                <a
                                    href="https://explorer.xrplevm.org/address/0xe570834499390BF03ceA4b63F20a02f374F535b8?tab=txs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline underline-offset-2 text-xs inline-flex justify-center gap-1 leading-4 hover:underline dark:text-[var(--color-accent)]"
                                >
                                    <span>https://explorer.xrplevm.org/address/0xe570834499390BF03ceA4b63F20a02f374F535b8?tab=txs</span>
                                    <svg
                                    aria-hidden="true"
                                    height="0.7em"
                                    viewBox="0 0 6 6"
                                    width="0.7em"
                                    className="opacity-70"
                                    >
                                    <path
                                        d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                                        fill="currentColor"
                                    ></path>
                                    </svg>
                                </a>
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-gray-500 dark:border-dashed  border-t">
                        <div className="p-4">
                            <div className="text-center lg:text-left">
                                <span
                                className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2"
                                data-tip="Any changes to the data will result in a different hash value. Hence, this uniquely identifies the data."
                                >
                                <span className="uppercase text-xs font-bold">Hash</span>
                                <Image
                                    alt="tooltip icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    className="inline-block align-text-middle ml-1"
                                    src={infoIcon}
                                />
                                </span>
                            </div>

                            <CodeRenderer language="bash" code={VerificationData.bash} />
                        </div>

                        <div className="p-4">
                            <div className="text-center lg:text-left">
                                <span
                                className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2"
                                data-tip="This is a public record of the transaction made on the blockchain. It is a decentralized, open-source network. We have obtained this directly from the blockchain."
                                >
                                <span className="uppercase text-xs font-bold">Public Ledger</span>
                                <Image
                                    alt="tooltip icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    className="inline-block align-text-middle ml-1"
                                    src={infoIcon}
                                />
                                </span>
                            </div>

                            <CodeRenderer language="json" code={VerificationData.publicLedger} />
                        </div>

                        <div className="p-4">
                            <div className="text-center lg:text-left">
                                <span
                                className="text-left cursor-help tooltip tooltip-top underline decoration-dotted underline-offset-2"
                                data-tip="This is a public record of the transaction made on the blockchain. It is a decentralized, open-source network. We have obtained this directly from the blockchain."
                                >
                                <span className="uppercase text-xs font-bold">Raw Body</span>
                                <Image
                                    alt="tooltip icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    className="inline-block align-text-middle ml-1"
                                    src={infoIcon}
                                />
                                </span>
                            </div>

                            <CodeRenderer language="json" code={VerificationData.rawBody} raw={true} />
                        </div>


                    </div>
                </div>
            </section>
        </main>
    )
}

export default function CertificatePage() {
    const isMounted = useIsMounted();
  
  return (
      isMounted && (
        <div className="">
          {isMounted && Certificate()}
        </div>
      )
  );
}


const CodeRenderer = ({ code, language = 'json', raw = false }) => {
    const formatCode = (code, language) => {
      if (raw) return escapeHtml(typeof code === 'object' ? JSON.stringify(code, null, 2) : code); // Handle objects
      switch (language) {
        case 'json':
          return highlightJson(JSON.stringify(code, null, 2));
        case 'bash':
          return highlightBash(code);
        case 'javascript':
          return highlightJavaScript(code);
        default:
          return escapeHtml(code); // Handle unsupported languages
      }
    };
  
    // Escape HTML characters to prevent XSS
    const escapeHtml = (unsafe) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };
  
    // JSON syntax highlighting with regex
    const highlightJson = (json) => {
      return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)|(\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
          let className = 'text-green-400';
          if (/^"/.test(match)) {
            className = /:$/.test(match) ? 'text-blue-300 font-bold' : 'text-yellow-300';
          } else if (/true|false/.test(match)) {
            className = 'text-purple-400 font-semibold';
          } else if (/null/.test(match)) {
            className = 'text-gray-400';
          } else {
            className = 'text-orange-300';
          }
          return `<span class="${className}">${match}</span>`;
        }
      );
    };
  
    // Basic Bash syntax highlighting with regex
    const highlightBash = (bashCode) => {
      return bashCode.replace(
        /(#[^\n]*|\b(?:cd|ls|echo|rm|mkdir|git|npm|yarn)\b)/g,
        (match) => {
          const isComment = /^#/.test(match);
          const className = isComment ? 'text-gray-500 italic' : 'text-blue-300 font-semibold';
          return `<span class="${className}">${match}</span>`;
        }
      );
    };
  
    // Basic JavaScript syntax highlighting with regex
    const highlightJavaScript = (jsCode) => {
      return jsCode.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"|(\bconst\b|\bvar\b|\blet\b|\bfunction\b|\breturn\b)|(\b\d+\b))/g,
        (match) => {
          if (/^".*"$/.test(match)) return `<span class="text-yellow-300">${match}</span>`; // Strings
          if (/\b(const|var|let|function|return)\b/.test(match)) return `<span class="text-blue-400 font-bold">${match}</span>`; // Keywords
          if (/^\d+$/.test(match)) return `<span class="text-orange-300">${match}</span>`; // Numbers
          return match;
        }
      );
    };
  
    return (
      <div className="p-4 bg-gray-900 text-white rounded-md shadow-lg">
        <pre
          className="bg-gray-800 p-4 rounded-md overflow-auto text-sm"
          dangerouslySetInnerHTML={{ __html: formatCode(code, language) }}
        ></pre>
      </div>
    );
  };