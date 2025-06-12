import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    alt: "社内の雰囲気1",
    placeholder: "製造現場での作業風景"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg",
    alt: "社内の雰囲気2",
    placeholder: "品質管理チームのミーティング"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
    alt: "社内の雰囲気3",
    placeholder: "研修の様子"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    alt: "社内の雰囲気4",
    placeholder: "社内イベントの様子"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg",
    alt: "社内の雰囲気5",
    placeholder: "技術開発の現場"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3862137/pexels-photo-3862137.jpeg",
    alt: "社内の雰囲気6",
    placeholder: "チームワークの様子"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg",
    alt: "社内の雰囲気7",
    placeholder: "福利厚生施設"
  }
];

export default function ImageGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <Slider {...settings} className="gallery-slider">
          {images.map((image) => (
            <div key={image.id} className="px-2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500 text-center p-4">{image.placeholder}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}