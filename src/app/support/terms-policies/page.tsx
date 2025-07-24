"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function TermsPoliciesPage() {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <main>
      {/* Banner Section */}
      <section className="relative w-full h-[36rem] md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="https://cdn.legendholding.com/images/cdn_68809fc44e2ee6.43546854_20250723_083932.png"
          alt="Terms & Policies Banner"
          fill
          className="object-cover object-bottom w-full h-full"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Terms & Policies
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Main Content */}
              <div className="flex-1 p-8">
                {/* General Terms Label */}
                <div className="mb-4">
                  <span className="inline-block bg-[#2B1C48] text-white px-3 py-1 rounded text-sm font-medium">
                    General Terms
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-[#2B1C48] mb-6">Terms and Policies</h2>
                
                {/* Tab Navigation */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('terms')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'terms'
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Terms
                    </button>
                    <button
                      onClick={() => setActiveTab('after-sales')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'after-sales'
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      After-sales Terms
                    </button>
                    <button
                      onClick={() => setActiveTab('privacy')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'privacy'
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => setActiveTab('disclaimer')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'disclaimer'
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Disclaimer
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === 'terms' && (
                    <div>
                      <p className="text-gray-700 mb-6">
                        Please carefully read the after-sales terms for the warranty policy and principle.
                      </p>

                      {/* About Warranty Section */}
                      <div className="mb-6">
                        <div className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium mb-4">
                          About Warranty
                        </div>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2 mt-1">※</span>
                            <span>After you purchase the complete machine and other related products, the warranty starts from the day you receive the product.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2 mt-1">※</span>
                            <span>If the Unitree product you purchased is out of warranty, you can also get help and support by purchasing a separate service.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-500 mr-2 mt-1">※</span>
                            <span>The warranty will be invalid directly if following behaviors happen without Unitree Robotics permission: unauthorized modification, unauthorized disassembly, and shell opening, etc.</span>
                          </li>
                        </ul>
                      </div>

                      {/* Maintenance Condition Section */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-[#2B1C48] mb-4">Maintenance Condition</h3>
                        <p className="text-gray-700 mb-4">
                          According to the specific situation, we will provide corresponding maintenance or parts replacement for the Unitree product you purchased. But the following cases are not covered by the free warranty:
                        </p>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                          <li>Beyond the warranty period.</li>
                          <li>Damage caused by improper use by the user (such as falling, squeezing, immersion, violent use, etc.).</li>
                          <li>Product malfunction caused by the usage of non-original accessories.</li>
                          <li>Factitious damage which is not product quality problem.</li>
                          <li>Product damage caused by behaviors such as unauthorized modification, disassembly, shell opening, etc.</li>
                          <li>Damage caused by incorrect installation, usage, and operation not in accordance with the product brochure.</li>
                          <li>Damage caused by self-maintenance or replacement of the parts without official instruction.</li>
                          <li>Damage caused by circuit modification, incorrect operation of battery pack and charger in no accordance with official product brochure.</li>
                          <li>Damage caused by the manipulation in severe environments including but not limited to intense electromagnetic interference, rain, sand weather, wetland, complex geological circumstances, etc.</li>
                          <li>Damage caused by the manipulation in condition of sharp terrain, severe fluctuation, etc.</li>
                          <li>Damage caused by manipulating the robot on the ground with very low friction such as ice surface, glass surface.</li>
                          <li>Damage caused by tumble or fall when manipulating robot on level ground.</li>
                          <li>Damage caused by collision between robot and people or object in complex environment.</li>
                          <li>Damage caused by manipulation in the case of mutual interference with other wireless devices, such as Wifi signal interference, electromagnetic interference, etc.</li>
                          <li>Damage caused by overloading in the case of exceeding the safe load bearing capacity.</li>
                          <li>Damage caused by various violence or non-violence imposed on the robot which reaches its anti-interference limit.</li>
                          <li>Damage caused by unauthorized usage of non-original battery packs to power the robot.</li>
                          <li>Damage caused by compatibility and reliability issues when using the third-party product simultaneously.</li>
                          <li>Damage caused by forced operation with damaged and aging components.</li>
                          <li>Damage caused by insufficient discharge when the power is insufficient or using battery packs with quality problems.</li>
                          <li>The product was not delivered within the stipulated time after contacting Unitree to confirm the warranty service.</li>
                          <li>Hitting with hard objects, fall, obvious collision marks and scratch marks on robot surface caused by misoperation.</li>
                          <li>There are obvious invasion traces of dust, gravel, water, metal powder in the robot.</li>
                          <li>There are obvious water stains on the surface and inside of the robot and corrosion marks on components and circuit boards due to the use in humid environment.</li>
                          <li>In the developer mode, the users use their own programs to develop high-level or low-level robots, causing damage to robots. Including: for example, during high-level development, the users carry their own vision system to control the robot to move, resulting in damage caused by the robot hitting sharp objects or falling from a high place; For example, when the bottom layer is developed, the damage is caused by the user-controlled motor hitting the joint limit or generating other impacts or high-speed vibration of the motor.</li>
                        </ul>
                      </div>

                      {/* Other Detailed Rules Section */}
                      <div>
                        <h3 className="text-xl font-semibold text-[#2B1C48] mb-4">Other Detailed Rules</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                          <li>When you send the product to Unitree Robotics, you need to bear the postage cost first.</li>
                          <li>After receiving the defective products, you need to guarantee, Unitree Robotics will test the products to determine the problems and responsibilities. If it is a quality defect of the product itself, Unitree Robotics will be responsible for the cost of testing, materials, labor and express delivery.</li>
                          <li>If the tested product does not meet the free maintenance conditions, you can choose to pay for maintenance or return the original machine, and you will be responsible for the courier fee for the original machine.</li>
                          <li>If the problem of the product exceeds the warranty scope, we will charge the corresponding inspection fee, replacement part fee, test fee, labor fee and transportation fee according to the specific problem.</li>
                          <li>Product maintenance may cause data loss. Please backup your data first.</li>
                          <li>Please do not return the seriously damaged battery packs; If you have already sent them back, Unitree Robotics will scrap the battery packs and will not return them.</li>
                          <li>If you have any questions about the warranty service of Unitree Robotics, please contact us.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'after-sales' && (
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        This after-sales policy is only applicable to the Unitree Robotics products that you purchased for your own use and not for resale.
                      </p>

                      <div className="space-y-4">
                        <p className="text-gray-700">
                          The warranty period of all products of Unitree Robotics starts from the day when you receive the goods.
                        </p>
                        
                        <p className="text-gray-700">
                          Any product repair and maintenance not caused by the original design and manufacturing of the product will be charged corresponding fees. Unitree Robotics does not entrust or authorize any third party to repair and maintain the product. If there is any after-sales demand, please contact us directly.
                        </p>
                        
                        <p className="text-gray-700">
                          If you use this product for the second development, please back up and save your data before obtaining the after-sales warranty to ensure your data security.
                        </p>
                        
                        <p className="text-gray-700">
                          When obtaining after-sales service, Unitree Robotics will have full and free rights to access your equipment to provide necessary after-sales service support.
                        </p>
                        
                        <p className="text-gray-700">
                          When the warranty service involves the replacement of product parts, the replaced product parts will become the property of Unitree Robotics, and the replaced product parts will become your property. Only unmodified products and parts can be replaced.
                        </p>
                        
                        <p className="text-gray-700">
                          Replacement parts may not be brand new, but we guarantee that they are in good working order and are functionally equivalent to the parts being replaced. The replacement parts shall enjoy the same warranty service during the warranty period of the original products.
                        </p>
                      </div>

                      {/* Warranty Exclusions */}
                      <div>
                        <h3 className="text-xl font-semibold text-[#2B1C48] mb-4">Warranty Exclusions</h3>
                        <p className="text-gray-700 mb-4">
                          The following conditions will not be covered by the warranty policy:
                        </p>
                        <p className="text-gray-700">
                          Artificial damage not caused by the quality of the product itself or all damage not in accordance with the product instructions, including unauthorized modification, disassembly, installation, incorrect use, loading, self-repair, modification, operation under severe conditions such as strong magnetism, strong interference, rainy days, and insufficient electricity.
                        </p>
                      </div>

                      {/* Instructions on Return and Replacement */}
                      <div>
                        <h3 className="text-xl font-semibold text-[#2B1C48] mb-4">Instructions on Return and Replacement</h3>
                        
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            For Laikago complete machine, we do not provide return or replacement.
                          </p>
                          
                          <p className="text-gray-700">
                            When you buy the non-complete machine products, since you received the goods within 7 natural days, if the product is not artificially damaged, product packaging, instructions and accessories are complete, you can apply for return.
                          </p>
                          
                          <p className="text-gray-700">
                            If the non-complete Unitree Robotics product you purchased has its own manufacturing performance failure, damage during transportation or other conditions inconsistent with the original product description, you can apply for return/replacement within 15 natural working days.
                          </p>
                          
                          <p className="text-gray-700">
                            For Unitree Robotics non-complete products, we have the right to refuse your request for return and replacement. Under the following circumstances, return and replacement are not allowed:
                          </p>
                          
                          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                            <li>When you request for goods return or replacement beyond the time specified above after receiving the goods.</li>
                            <li>The product is artificially damaged, the package is incomplete, the manual and other accessories are incomplete or damaged.</li>
                            <li>When the product is damaged due to manual disassembly, modification, operation not in accordance with the instructions and other incorrect use.</li>
                            <li>It is not the original genuine product of Unitree Robotics, or the legal purchase certificate cannot be provided.</li>
                            <li>When the product is damaged due to irresistible factors such as flood, fire, traffic accident, lightning stroke, etc.</li>
                            <li>Failure or damage caused by any third-party product.</li>
                            <li>After contacting Unitree Robotics and confirming the return and replacement service, the corresponding product items are not sent out within the above specified return and replacement time.</li>
                            <li>When the policy is adjusted.</li>
                          </ul>
                        </div>
                        
                        <p className="text-gray-700 mt-4">
                          As quadruped robots are pioneering products at present, and the operating conditions are complex and difficult to define, the above after-sales policies may not be the latest or most comprehensive. If you want to know more complete after-sales policies of Unitree Robotics, you can contact us.
                        </p>
                      </div>

                      {/* Limitation of Liability */}
                      <div>
                        <h3 className="text-xl font-semibold text-[#2B1C48] mb-4">Limitation of Liability</h3>
                        
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            Unitree Robotics is only responsible for the loss or damage of the product in the following cases:
                          </p>
                          <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                            <li>The product is owned by Unitree Robotics, or the product is transported by Unitree Robotics.</li>
                          </ul>
                          
                          <p className="text-gray-700">
                            Unitree Robotics is not responsible for the loss or disclosure of any data contained in the product, including confidential, proprietary, or personal information.
                          </p>
                          
                          <p className="text-gray-700">
                            For the following cases:
                          </p>
                          <ul className="space-y-2 text-gray-700 list-decimal list-inside ml-4">
                            <li>A third party claims damages from you;</li>
                            <li>Your data is lost, damaged or leaked;</li>
                            <li>Special, incidental, indirect or consequential damages, including but not limited to loss of profits, business income, goodwill or expected savings.</li>
                          </ul>
                          
                          <p className="text-gray-700">
                            No matter whether any relief specified herein has achieved its fundamental purpose, and no matter whether the claim is based on contract, guarantee, negligence, strict liability or other liability theories, Unitree Robotics will not be responsible, even if it has known the possibility of these situations. Regardless of the damage based on any reason, the full liability of Unitree Robotics and its affiliated enterprises, suppliers, distributors or suppliers is limited to the direct losses you actually suffered and is not more than the amount you paid for purchasing products.
                          </p>
                          
                          <p className="text-gray-700">
                            The above restrictions do not apply to the personal injury (including death) that Unitree Robotics should be responsible for according to law, as well as the compensation for the loss of real estate and tangible movable property.
                          </p>
                          
                          <p className="text-gray-700">
                            Unitree Robotics will not bear any responsibility for the personal or property damage caused by the customer's own operation of the robot.
                          </p>
                          
                          <p className="text-gray-700">
                            Some countries or regions or jurisdictions do not allow any investigation or restriction on incidental or consequential damages, so the above exclusion or restriction may not apply to you.
                          </p>
                          
                          <p className="text-gray-700">
                            Unitree Robotics will have the final right to explain the after-sales policy.
                          </p>
                          
                          <p className="text-gray-700">
                            Before obtaining after-sales service, please contact us if you have any questions.
                          </p>
                          
                          <p className="text-gray-700">
                            The after-sales terms are only applicable to Chinese Mainland, and the after-sales policies of other countries or regions are subject to the local laws.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'privacy' && (
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        This privacy policy is only applicable to the Unitree Robotics products that you purchased for your own use and not for resale.
                      </p>

                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Unitree Robotics attaches importance to the maintenance and protection of users' personal information.
                        </p>
                        
                        <p className="text-gray-700">
                          When you use Unitree Robotics products and services, we may collect and use your personal information.
                        </p>
                        
                        <p className="text-gray-700">
                          The purpose of this 'Privacy Policy' is to explain to you how we collect, store and use your personal information.
                        </p>
                        
                        <p className="text-gray-700">
                          We hope you can read this Privacy Policy carefully so that you can make appropriate choices when necessary.
                        </p>
                      </div>

                      {/* Key Points */}
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">※</span>
                          <span className="text-gray-700">When you use Unitree Robotics products or services, it means that you agree to our collection, storage and use of your personal information in accordance with this 'Privacy Policy'.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">※</span>
                          <span className="text-gray-700">The information you provide to Unitree Robotics, including name, phone number, e-mail address, ID number, bank card number, third-party payment account number, etc., may be collected by us.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">※</span>
                          <span className="text-gray-700">Information stored in the system when you use our products or services, such as log records of product use, configuration information of your electronic equipment, IP address, time information, location information, shared text or pictures, etc. when accessing our products or services.</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">※</span>
                          <span className="text-gray-700">Your personal information may contain sensitive information, such as your race, religion, personal health status, gender orientation, etc. When you use our products or services, you may upload or publish such sensitive information in public channels. Please handle this kind of sensitive information with caution.</span>
                        </div>
                      </div>

                      {/* Collection Purposes */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Collection Purposes</h3>
                        <p className="text-gray-700 mb-4">
                          We may collect your personal information for the following purposes:
                        </p>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                          <li>Authenticate your identity to prevent fraud;</li>
                          <li>Identify your technical service needs;</li>
                          <li>Identify products and services that are suitable for you;</li>
                          <li>Provide products and services according to your requirements;</li>
                          <li>Comply with the requirements of laws and regulations.</li>
                          <li>To provide you with services. Help us design new products or services and improve our existing products or services.</li>
                          <li>Used for identification, customer service, security, archiving or backup, etc.</li>
                          <li>To serve you advertisements that are more relevant to you.</li>
                          <li>To allow you to participate in our product or service surveys.</li>
                        </ul>
                      </div>

                      {/* Information Protection */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Protection and Sharing</h3>
                        <p className="text-gray-700 mb-4">
                          No matter how your personal information is provided to Unitree Robotics, it will be stored and protected by Unitree Robotics.
                        </p>
                        <p className="text-gray-700 mb-4">
                          We will not share your personal information with any third party other than Unitree Robotics, but there are some exceptions in the following cases.
                        </p>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                          <li>With your consent, share your information with the product or service providers authorized by Unitree Robotics to achieve the necessary purpose.</li>
                          <li>Share your personal information within Unitree Robotics to achieve the necessary purpose.</li>
                          <li>In the future, we may sell Unitree Robotics business or merge new business. In this case, your personal information and relevant accounts, products, and services you purchased, etc. will be transferred along with the business.</li>
                          <li>Your personal information may be required to be disclosed under the following circumstances.</li>
                          <li>Disclosure to judicial or law enforcement agencies to detect and prevent crimes when suspected of criminal activity.</li>
                          <li>Disclosure required by law (or court).</li>
                          <li>Disclosure according to the mandatory requirements of the government.</li>
                          <li>To protect Unitree Robotics assets (such as paying off overdue accounts).</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                          Under the above circumstances, we will record the content, time, reason and object of information disclosure.
                        </p>
                      </div>

                      {/* User Rights */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">User Rights and Choices</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">△</span>
                            <span className="text-gray-700">If you want to view or verify your personal information and view our disclosure records, please contact us. If we are unable to provide relevant information under certain circumstances, we will promptly inform you of the reasons.</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">△</span>
                            <span className="text-gray-700">In some cases, you have the right to refuse to provide us with certain information, but we may not be able to provide you with certain products, services, or information. To protect the interests of both parties, for example, to ensure that your requirements are implemented and to prove that we have provided you with the required information, we may monitor your telephone or email exchanges with Unitree Robotics to ensure our service quality.</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">△</span>
                            <span className="text-gray-700">If you do not wish to receive our direct marketing communications, please let us know and we will delete your personal information from the direct marketing list.</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">△</span>
                            <span className="text-gray-700">If you do not want us to share your personal information among members of Unitree Robotics, please inform us. In this case, we may not be able to provide you with specific products or services due to missing information.</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">△</span>
                            <span className="text-gray-700">If you are under the age of 18, you should obtain the consent and guidance of your parents or guardians to ensure the correct use of our products and services.</span>
                          </div>
                        </div>
                      </div>

                      {/* Legal and Updates */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Compliance and Policy Updates</h3>
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            According to the laws of your region, some provisions of this Privacy Policy may not apply to you. This Privacy Policy does not exclude or limit any of your rights under local laws.
                          </p>
                          <p className="text-gray-700">
                            We may amend the terms of this Privacy Policy timely, which forms part of this Privacy Policy. If the amendment results in a substantial reduction of your rights under this Privacy Policy, we will notify you before the amendment takes effect by prompting at a prominent position on the home page or sending you an email or by other means. In this case, if you continue to use our services, that means you agree to be bound by the revised Privacy Policy.
                          </p>
                          <p className="text-gray-700">
                            Please contact us if you have any questions before obtaining after-sales service.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'disclaimer' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer and Warning in Use of Unitree Robotics Robot Dog Series Products</h3>
                      
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          To avoid illegal acts, possible injuries and losses, the following provisions must be observed:
                        </p>
                        
                        <p className="text-gray-700">
                          Please read this document and User Manual carefully before using this product to understand your legal rights, responsibilities, and safety instructions; Otherwise, it may cause property damage, safety accidents and personal safety hazards; Once you use the product, you will be deemed to have understood, recognized, and accepted all the terms and contents of this document. Please operate in strict accordance with the product use specifications; The users promise to be responsible for their own actions and all consequences arising therefrom.
                        </p>
                      </div>

                      {/* Safety Warnings */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Safety Warnings</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>This product is not a toy and is not suitable for people under the age of 18. Please do not let children touch this product, and be careful when operating in the presence of children;</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>This product should not be used in similar scenes such as infants, children, pregnant women, the elderly, disabled people, and densely populated areas (with an interval of less than 1 meter). If the above related personnel are injured or damaged by property due to misoperation, Unitree Robotics will not bear all the losses and consequences arising therefrom;</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>Unauthorized disassembly, modification and informal maintenance of this product are prohibited. Unitree Robotics will not bear any responsibility for all failures and damages caused by the above behaviors;</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>This product is strictly forbidden to be used in unconventional environments (such as high temperature, extreme cold, chemical corrosion, fire blisters). Unitree Robotics will not be responsible for all the above failures and damages;</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>Under normal use, the failure and risk burden caused by normal natural loss of parts and aging of batteries of this product are considered as the risk of normal use of the product, and Unitree Robotics will not bear the corresponding consequences and responsibilities;</span>
                          </li>
                        </ul>
                      </div>

                      {/* Legal Compliance */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance and Usage Restrictions</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>You promise to comply with laws and regulations applicable to export controls and legal sanctions;</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>You promise not to use the product for the following purposes: including but not limited to supporting for terrorism, nuclear facilities, biological and chemical weapons, and any other military purposes that jeopardize national security and interests; for the design, development, production and use of weapons of mass destruction and their delivery vehicles.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>You promise that you are not subject to trade restrictions and sanctions or law and regulation restrictions by any country, international organization or region; otherwise, you may not be able to register or use Unitree Robotics's product functions and services.</span>
                          </li>
                        </ul>
                      </div>

                      {/* Global Operations */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Operations and Local Compliance</h4>
                        <p className="text-gray-700 mb-4">
                          We are fully aware of the responsibilities and obligations of global operation and are committed to ensuring that our products and services comply with laws and regulations across the globe. We remind all the users that when using our products and services, you should abide by the local laws and regulations. We encourage users to learn about and maintain their rights and obligations under their respective legal frameworks. In order to adapt to the legal requirements of different regions, we may make appropriate adjustments to product features, service content or privacy policies to reach local compliance. As a user, you are responsible for learning and complying with the specific laws of your region, including but not limited to the uploading, sharing, downloading and use of content.
                        </p>
                        
                        <p className="text-gray-700">
                          The users promise to use this product only for legitimate purposes and agrees to all the terms and contents of the document and any relevant policies or guidelines that may be formulated by Unitree Robotics. Unitree Robotics will not bear all losses and consequences caused by the users' failure to use the product in accordance with the guide and the user manual.
                        </p>
                      </div>

                      {/* Final Rights */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Final Rights and Interpretation</h4>
                        <p className="text-gray-700">
                          In compliance with laws and regulations, Unitree Robotics has the final right to interpret this document. Unitree Robotics reserves the right to update, revise or terminate these terms without prior notice.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 