'use client'; // Required for interactivity

import { useEffect } from 'react';

export default function HubspotModal({ formId, isOpen, setIsOpen }) {
       useEffect(() => {
              // Load HubSpot script
              const script = document.createElement('script');
              script.src = '//js.hsforms.net/forms/embed/v2.js';
              script.charset = 'utf-8';
              script.async = true;
              document.body.appendChild(script);

              return () => {
                     document.body.removeChild(script);
              };
       }, []);

       useEffect(() => {
              if (isOpen) {
                     // Initialize form when modal opens
                     if (window.hbspt) {
                            window.hbspt.forms.create({
                                   region: 'na1',
                                   portalId: '20369857',
                                   formId: formId,
                                   target: '#hubspot-form-container'
                            });
                     }
              }
       }, [isOpen, formId]);

       return (
              <>
                     {/* Modal */}
                     {isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
                                   <div className="py-5 w-full mx-auto">
                                   <div className="bg-white rounded-lg shadow-xl max-w-2xl mx-auto w-full max-h-[90vh] my-5 relative">
                                          <div className="absolute top-0 right-0 p-4">
                                                 <button
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-gray-500 hover:text-gray-700"
                                                 >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                 </button>
                                          </div>
                                          <div className="p-6">
                                                 <div id="hubspot-form-container"></div>
                                          </div>
                                   </div>
                                   </div>
                            </div>
                     )}
              </>
       );
}