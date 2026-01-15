"use client";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        // KABA KUVVET: %110 genişlik ve yükseklik ile kenarları taşırıyoruz
        className="absolute top-1/2 left-1/2 min-w-[110vw] min-h-[110vh] w-auto h-auto object-cover opacity-50 transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/leaves.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
