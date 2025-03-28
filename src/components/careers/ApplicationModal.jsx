import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

export default function ApplicationModal({ isOpen, onClose, position, locationAddress }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    company: '',
    department: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const templateParams = {
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        age: formData.age,
        company: formData.company,
        department: formData.department,
        position_title: position.title,
        location: locationAddress
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          name: '',
          age: '',
          email: '',
          phone: '',
          company: '',
          department: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Form error:', error);
      setSubmitError('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        company: '',
        department: ''
      });
      setSubmitError('');
      setSubmitSuccess(false);
    }
  }, [isOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 mb-4"
                >
                  応募フォーム
                  <button
                    onClick={onClose}
                    className="float-right text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </Dialog.Title>

                <div className="mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">応募職種</h4>
                    <p className="text-gray-700">{position.title}</p>
                    <p className="text-gray-600 mt-2">{locationAddress}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        年齢 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="16"
                        max="100"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        現在の会社名
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                        部署名
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>

                    {submitError && (
                      <div className="text-red-500 text-sm">{submitError}</div>
                    )}

                    {submitSuccess && (
                      <div className="text-green-500 text-sm">
                        応募が完了しました。ご応募ありがとうございます。
                      </div>
                    )}

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary text-white py-3 px-6 rounded-lg transition-colors duration-300
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'}`}
                      >
                        {isSubmitting ? '送信中...' : '応募する'}
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}