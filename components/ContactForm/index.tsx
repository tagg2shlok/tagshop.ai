// 'use client';
// import { useState } from 'react';
// import axios from 'axios';
// import { Button } from '../ui/button';

// export default function ContactForm({ onClose }: { onClose: () => void }) {
//        const [formData, setFormData] = useState({
//               fullName: '',
//               email: '',
//               phone: '',
//               website: '',
//               message: ''
//        });
//        const [errors, setErrors] = useState({});
//        const [isSubmitting, setIsSubmitting] = useState(false);
//        const [submitSuccess, setSubmitSuccess] = useState(false);

//        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//               const { name, value } = e.target;
//               setFormData(prev => ({ ...prev, [name]: value }));
//        };

//        const validate = () => {
//               const newErrors = {};
//               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//               const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

//               if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//               if (!formData.email) {
//                      newErrors.email = 'Email is required';
//               } else if (!emailRegex.test(formData.email)) {
//                      newErrors.email = 'Please enter a valid email';
//               }
//               if (!formData.phone) newErrors.phone = 'Phone number is required';
//               if (formData.website && !urlRegex.test(formData.website)) {
//                      newErrors.website = 'Please enter a valid URL';
//               }
//               if (!formData.message.trim()) newErrors.message = 'Message is required';

//               setErrors(newErrors);
//               return Object.keys(newErrors).length === 0;
//        };

//        const handleSubmit = async (e: React.FormEvent) => {
//               e.preventDefault();
//               if (!validate()) return;

//               setIsSubmitting(true);
//               try {
//                      await axios.post('api/send-mail/index', formData);
//                      setSubmitSuccess(true);
//                      setTimeout(() => {
//                             onClose();
//                             setSubmitSuccess(false);
//                      }, 2000);
//               } catch (error) {
//                      console.error('Failed to send message:', error);
//               } finally {
//                      setIsSubmitting(false);
//               }
//        };

//        return (
//               <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 overflow-x-auto mx-auto">
//                      <div className="py-5">
//                      <div className="bg-gray-900 rounded-lg shadow-xl w-full grid grid-cols-2 col-span-2 p-3" style={{ maxWidth: '1000px' }}>
//                             <div className="p-6 col-span-1">
//                                    <h3 className='mb-0 2xl:text-[30px] font-bold leading-[1.2] text-white mb-6'>High-performing UGC videos delivered fast!</h3>
//                                    <img src="/assets/pages/home/price-modal-min.png" alt="AI" width={500} height={500} />
//                             </div>
//                             <div className="p-6 col-span-1">
//                                    <div className="flex justify-end items-center mb-4">
//                                           <button
//                                                  onClick={onClose}
//                                                  className="text-gray-500 hover:text-gray-700"
//                                           >
//                                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                                  </svg>
//                                           </button>
//                                    </div>

//                                    {submitSuccess ? (
//                                           <div className="text-center py-8">
//                                                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                  </svg>
//                                                  <h3 className="text-xl font-medium text-gray-800 mb-2">Message Sent!</h3>
//                                                  <p className="text-gray-600">We'll get back to you soon.</p>
//                                           </div>
//                                    ) : (
//                                           <form onSubmit={handleSubmit} className="space-y-4">
//                                                  <div>
//                                                         <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//                                                                Full Name <span className="text-red-500">*</span>
//                                                         </label>
//                                                         <input
//                                                                type="text"
//                                                                id="fullName"
//                                                                name="fullName"
//                                                                value={formData.fullName}
//                                                                onChange={handleChange}
//                                                                className={`w-full px-3 py-2 border bg-black rounded-md text-white placeholder:text-white ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
//                                                         />
//                                                         {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
//                                                  </div>

//                                                  <div>
//                                                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                                                Email <span className="text-red-500">*</span>
//                                                         </label>
//                                                         <input
//                                                                type="email"
//                                                                id="email"
//                                                                name="email"
//                                                                value={formData.email}
//                                                                onChange={handleChange}
//                                                                className={`w-full px-3 py-2 border bg-black rounded-md text-white placeholder:text-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                                                         />
//                                                         {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                                                  </div>

//                                                  <div>
//                                                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                                                                Phone Number <span className="text-red-500">*</span>
//                                                         </label>
//                                                         <input
//                                                                type="tel"
//                                                                id="phone"
//                                                                name="phone"
//                                                                value={formData.phone}
//                                                                onChange={handleChange}
//                                                                className={`w-full px-3 py-2 border bg-black rounded-md text-white placeholder:text-white ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                                                         />
//                                                         {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//                                                  </div>

//                                                  <div>
//                                                         <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
//                                                                Website URL
//                                                         </label>
//                                                         <input
//                                                                type="url"
//                                                                id="website"
//                                                                name="website"
//                                                                value={formData.website}
//                                                                onChange={handleChange}
//                                                                className={`w-full px-3 py-2 border bg-black rounded-md text-white placeholder:text-white ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
//                                                                placeholder="https://example.com"
//                                                         />
//                                                         {errors.website && <p className="mt-1 text-sm text-red-600">{errors.website}</p>}
//                                                  </div>

//                                                  <div>
//                                                         <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                                                                Message <span className="text-red-500">*</span>
//                                                         </label>
//                                                         <textarea
//                                                                id="message"
//                                                                name="message"
//                                                                rows="4"
//                                                                value={formData.message}
//                                                                onChange={handleChange}
//                                                                className={`w-full px-3 py-2 border bg-black rounded-md text-white placeholder:text-white ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//                                                         ></textarea>
//                                                         {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                                                  </div>

//                                                  <div className="flex justify-end space-x-3 pt-2">
//                                                         <Button variant="outline" size="default" onClick={onClose}>
//                                                                Cancel
//                                                         </Button>
//                                                         <Button variant="default" size="default" onClick={handleSubmit}>
//                                                                {isSubmitting ? 'Sending...' : 'Send Message'}
//                                                         </Button>
//                                                  </div>
//                                           </form>
//                                    )}
//                             </div>
//                      </div>
//                      </div>
//               </div>
//        );
// }