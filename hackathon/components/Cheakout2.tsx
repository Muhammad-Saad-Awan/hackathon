"use client"
import React from 'react';
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
  });

interface FormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  countryRegion: string;
  streetAddress: string;
  townCity: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
}

interface BillingDetailsFormProps {
  onSubmit?: (data: FormData) => void;  // Made optional with ?
}

const BillingDetailsForm: React.FC<BillingDetailsFormProps> = ({ 
  onSubmit = () => {} // Default empty function
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    onSubmit({
      firstName: '',
      lastName: '',
      countryRegion: '',
      streetAddress: '',
      townCity: '',
      province: '',
      zipCode: '',
      phone: '',
      email: '',
    });
  };

  return (
    <div className={` ${poppins.className} max-w-6xl mx-auto p-6 mt-6`}>
      <h1 className="text-2xl font-bold mb-8">Billing details</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name (Optional)</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Country / Region</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Street address</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Town / City</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Province</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value="Western Province">Western Province</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">ZIP code</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Additional information</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none 
                 min-h-[100px]"
              />
            </div>
          </form>
        </div>

        <div className="flex-1 ">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="space-y-4">

            <div className="flex justify-between items-center text-xl font-semibold">
                <span>Product</span>
                <span>Sub Total</span>
              </div>
                
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              
              <div className="flex justify-between items-center font-medium">
                <span>Total</span>
                <span className="text-amber-500">Rs. 250,000.00</span>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="bank-transfer" 
                    name="payment" 
                    className="w-4 h-4" 
                    defaultChecked 
                  />
                  <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                </div>
                
                <p className="text-gray-500 text-sm">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="cash-delivery" 
                    name="payment" 
                    className="w-4 h-4" 
                  />
                  <label htmlFor="cash-delivery">Cash On Delivery</label>
                </div>

                <p className="text-sm">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                  <a href="#" className="text-black underline">privacy policy</a>.
                </p>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetailsForm;