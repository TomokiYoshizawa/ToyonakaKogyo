import { useState } from 'react';
import { locations, locationContent, commonJobDetails } from '../../data/careersData';
import ApplicationModal from './ApplicationModal';

function PageTitle() {
  return (
    <div className="relative mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">採用情報</h1>
      <div className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></div>
    </div>
  );
}

function LocationTabs({ locations, activeTab, setActiveTab }) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setActiveTab(location.id)}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
              activeTab === location.id
                ? 'bg-primary text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {location.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function JobPosition({ position, locationAddress, commonJobDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-primary/10 to-transparent p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{position.title}</h2>
            {position.type && (
              <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mt-2">
                {position.type}
              </span>
            )}
          </div>
          {position.recruitmentType && (
            <span className="bg-secondary text-white text-sm px-3 py-1 rounded-full">
              {position.recruitmentType}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">職務内容</h3>
          <p className="text-gray-600">{position.description}</p>
          {position.responsibilities && position.responsibilities.length > 0 && (
            <ul className="mt-4 space-y-2">
              {position.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">{resp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {position.qualifications && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">応募資格</h3>
            <p className="text-gray-600">{position.qualifications}</p>
          </div>
        )}

        <div className="border-t pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">勤務地</h3>
              <p className="text-gray-600">{locationAddress}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">勤務時間</h3>
              <p className="text-gray-600">{position.workingHours}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">休日・休暇</h3>
              <p className="text-gray-600">{position.holidays.regular}</p>
              <p className="text-gray-600 mt-1">{position.holidays.total}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">福利厚生</h3>
              <ul className="space-y-1">
                {position.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-600">{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">給与</h3>
              <p className="text-gray-600">{position.salary}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">昇給・賞与</h3>
              <p className="text-gray-600">昇給: {position.raise}</p>
              <p className="text-gray-600">賞与: {position.bonus}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">選考プロセス</h3>
              <p className="text-gray-600">{position.selectionProcess}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <span>応募する</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={position}
        locationAddress={locationAddress}
      />
    </div>
  );
}

export default function Careers() {
  const [activeTab, setActiveTab] = useState('headquarters');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle />
      
      <LocationTabs 
        locations={locations}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="space-y-8">
        {locationContent[activeTab].positions.length > 0 ? (
          locationContent[activeTab].positions.map((position, index) => (
            <JobPosition
              key={index}
              position={position}
              locationAddress={locationContent[activeTab].address}
              commonJobDetails={commonJobDetails}
            />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-xl text-gray-700">現在、採用は行なっておりません</p>
          </div>
        )}
      </div>
    </div>
  );
}