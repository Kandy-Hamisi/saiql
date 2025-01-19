interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
}

interface BlazeSliderConfig {
  all?: {
    slidesToShow?: number;
    slidesToScroll?: number;
    loop?: boolean;
    enableAutoplay?: boolean;
    autoplayInterval?: number;
    enablePagination?: boolean;
    transitionDuration?: number;
    slideGap?: string | number;
  };
  [breakpoint: number]: {
    slidesToShow?: number;
    slidesToScroll?: number;
    loop?: boolean;
    enableAutoplay?: boolean;
    autoplayInterval?: number;
    enablePagination?: boolean;
    transitionDuration?: number;
    slideGap?: string | number;
  };
}
