"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Faq() {
  const [openTab, setOpenTab] = useState(null);

  const toggle = (tab) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  return (

    <div className="max-w-4xl mx-auto py-10 px-4 bg-white dark:bg-white ">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h1>

      {/* FAQ 1 */}
      <div className="border-b border-slate-400">
        <div
          className="cursor-pointer p-3 flex justify-between items-center"
          onClick={() => toggle(1)}
          >
          <span className="font-medium text-lg">
            When will I receive my order?
          </span>
          <ChevronDownIcon
            className={`h-6 w-6 transition-transform ${
                openTab === 1 ? "rotate-180" : ""
            }`}
            />
        </div>
        {openTab === 1 && (
            <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-4 space-y-1 px-3">
            <li>
              We offer 1-day delivery within Guwahati. The transit time depends on
              your destination but we do provide an estimate with the order
              details once you place an order.
            </li>
          </ul>
        )}
      </div>

      {/* FAQ 2 */}
      <div className="border-b border-slate-400">
        <div
          className="cursor-pointer p-3 flex justify-between items-center"
          onClick={() => toggle(2)}
          >
          <span className="font-medium text-lg">
            How do I make an exchange/return?
          </span>
          <ChevronDownIcon
            className={`h-6 w-6 transition-transform ${
                openTab === 2 ? "rotate-180" : ""
            }`}
            />
        </div>
        {openTab === 2 && (
            <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-4 space-y-1 px-3">
            <li>
              If you wish to exchange or replace your product, please mail us
              at growhub.b2b@gmail.com or call us at +9175760 43293(10am - 6pm,
              Monday to Saturday) within 48 hours from date of delivery and
              we'll resolve your issue the best way we can.
            </li>
          </ul>
        )}
      </div>

      {/* FAQ 3 */}
      <div className="border-b border-slate-400">
        <div
          className="cursor-pointer p-3 flex justify-between items-center"
          onClick={() => toggle(3)}
          >
          <span className="font-medium text-lg">
            What do I do if I have received a damaged product?
          </span>
          <ChevronDownIcon
            className={`h-6 w-6 transition-transform ${
                openTab === 3 ? "rotate-180" : ""
            }`}
            />
        </div>
        {openTab === 3 && (
            <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-4 space-y-1 px-3">
            <li>
              In case you receive a damaged product, please raise an
              exchange/replacement request along with pictures of the damaged
              product at info@growhub.shop within 48 hours of the delivery
              and we'll resolve your issue. We will bear the cost of shipping
              the replacement product.
            </li>
          </ul>
        )}
      </div>

      {/* FAQ 4 */}
      <div className="border-b border-slate-400">
        <div
          className="cursor-pointer p-3 flex justify-between items-center"
          onClick={() => toggle(4)}
          >
          <span className="font-medium text-lg">
            Can I place a bulk order for a product?
          </span>
          <ChevronDownIcon
            className={`h-6 w-6 transition-transform ${
                openTab === 4 ? "rotate-180" : ""
            }`}
            />
        </div>
        {openTab === 4 && (
            <ul className="mt-2 text-sm md:text-lg text-gray-700 mb-4 space-y-1 px-3">
            <li>
              We do accept bulk orders. Please drop us a mail at
              info@growhub.shop with your budget and product requirements and
              we'll get back to you.
            </li>
          </ul>
        )}
      </div>

      {/* FAQ 5 */}
      <div className="border-b border-slate-400">
        <div
          className="cursor-pointer p-3 flex justify-between items-center"
          onClick={() => toggle(5)}
          >
          <span className="font-medium text-lg">
            Can I get my order gift-wrapped or include a personal message?
          </span>
          <ChevronDownIcon
            className={`h-6 w-6 transition-transform duration-500 ease-in-out ${
                openTab === 5 ? "rotate-180" : ""
            }`}
            />
        </div>
        {openTab === 5 && (
            <ul className="mt-2 duration-300 ease-in-out text-sm md:text-lg text-gray-700 mb-4 space-y-1 px-3">
            <li>
              You can let us know if you want your order gift wrapped or want a
              personal message included in your package and we'll do it for you.
            </li>
          </ul>
        )}
    </div>
        </div>
  );
}
