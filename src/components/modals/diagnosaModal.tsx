import React, { useRef, useState } from "react";
import { XIcon } from "../icons/xIcon";
import { PenyakitDanSolusi } from "@/types/penyakitDanSolusi";
import Note from "@/../public/assets/lottie/note.json";
import User from "@/../public/assets/lottie/user.json";
import Lungs from "@/../public/assets/lottie/lungs.json";
import Lottie from "lottie-react";
import { useReactToPrint } from "react-to-print";
import { DownloadIcon } from "@radix-ui/react-icons";
import { DefaultGejalaTypes } from "@/types/defaultGejalaTypes";

interface DiagnosaModalProps {
  setShowDiagnosa: React.Dispatch<React.SetStateAction<boolean>>;
  diagnosaInfo: string;
  diagnosa: PenyakitDanSolusi[];
  dataUser: any;
  gejalaUser: DefaultGejalaTypes;
}

export const DiagnosaModal = (props: DiagnosaModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div className="w-screen h-screen bg-black/90 fixed top-0 left-0 flex justify-center items-center z-50 p-3 md:p-6">
      <div className="w-full md:w-[85vw] lg:w-[60vw] max-h-[90vh] overflow-y-auto bg-black/60 border-[0.8px] border-white/40 rounded-xl grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 p-3 md:p-4 relative">
        <div className="fixed md:w-[85vw] lg:w-[60vw] max-h-[90vh]">
          <button
            onClick={() => props.setShowDiagnosa(false)}
            className="absolute -top-2 -right-2 bg-red-800 rounded-full p-1 pb-[0.29rem] hover:scale-110 duration-150"
          >
            <XIcon className="size-4 text-white" />
          </button>
        </div>
        <div className="flex flex-col text-white bg-[#151515] w-full rounded-xl relative p-3 md:p-4 h-auto">
          <h4 className="text-2xl md:text-4xl font-extrabold">Data Anda</h4>
          <div className="absolute top-0 right-2 w-14 h-14 md:w-20 md:h-20">
            <Lottie animationData={User} />
          </div>
          <div className="h-[1px] my-4 w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-2 w-[38%]">
              <p className="h-10 flex items-center font-bold">Nama</p>
              <p className="h-10 flex items-center font-bold">Usia</p>
              <p className="h-10 flex items-center font-bold">Golongan Darah</p>
            </div>
            <div className="flex flex-col gap-2 w-[62%]">
              <p className="capitalize border-[0.8px] border-white/20 flex items-center rounded-xl py-1 px-3 w-full h-10">
                {props.dataUser.nama}
              </p>
              <p className="capitalize border-[0.8px] border-white/20 flex items-center rounded-xl py-1 px-3 w-full h-10">
                {props.dataUser.usia} Tahun
              </p>
              <p className="capitalize border-[0.8px] border-white/20 flex items-center rounded-xl py-1 px-3 w-full h-10">
                {props.dataUser.golonganDarah}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#151515] shadow-lg shadow-black flex flex-col rounded-xl p-3 md:p-4 relative text-white w-full md:row-span-2">
          <h4 className="font-extrabold text-2xl md:text-4xl">Diagnosa</h4>
          <div className="absolute top-0 right-2 w-14 h-14 md:w-20 md:h-20">
            <Lottie animationData={Lungs} />
          </div>
          <div className="h-[1px] my-6 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          <p className="">{props.diagnosaInfo}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {props.diagnosa.map((penyakit, index) => (
              <li key={index} className="font-bold text-xl">
                {index + 1}. {penyakit.namaPenyakit}
              </li>
            ))}
          </ul>
          <p className="text-sm mt-auto">
            Segera lakukan konsultasi dengan dokter untuk mendapatkan
            pemeriksaan lebih lanjut dan penanganan medis yang tepat.
          </p>
        </div>
        <div className="text-white flex flex-col bg-[#151515] w-full h-full rounded-xl relative p-3 md:p-4">
          <h4 className="font-extrabold text-2xl md:text-4xl">
            Catatan Penting
          </h4>
          <div className="absolute -top-5 -right-1.5 w-20 h-20 md:w-28 md:h-28">
            <Lottie animationData={Note} />
          </div>
          <div className="h-[1px] my-4 w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
          <p className="text-xs text-justify">
            Hasil diagnosa ini memiliki tingkat akurasi 84.21% berdasarkan
            penelitian, yang berarti tidak 100% akurat. Layanan ini bersifat
            edukatif, bukan solutif, dan tidak menggantikan konsultasi medis
            profesional. Kami sangat menyarankan Anda untuk berkonsultasi dengan
            dokter spesialis paru-paru untuk evaluasi lebih lanjut dan
            penanganan yang tepat. Gunakan hasil ini sebagai langkah awal untuk
            lebih memperhatikan kesehatan paru-paru Anda, namun selalu andalkan
            nasihat dokter untuk keputusan kesehatan yang penting. Kesehatan
            Anda adalah prioritas utama.
          </p>
        </div>
        <button
          onClick={() => handlePrint()}
          className="md:col-span-2 text-white justify-center items-center gap-2 md:gap-3 duration-200 flex bg-cyan-700 hover:bg-cyan-900 saturate-200 rounded-xl font-bold py-2 md:py-2.5 text-base md:text-xl"
        >
          <p>Cetak Hasil</p>
          <DownloadIcon className="size-5" />
        </button>
        <div className="fixed mt-[200rem]">
          <div
            ref={contentRef}
            className="flex flex-col fixed bg-white w-full h-full py-10 px-12"
          >
            <div className="flex w-full justify-center items-center pb-6 border-b border-black/20">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-7xl font-extrabold">PulmoHealth</h2>
                <p className="pl-2 text-xs">
                  Kecerdasan Artifisial berbasis aturan mengenai diagnosa
                  penyakit paru-paru
                </p>
              </div>
            </div>
            <div className="mt-10 border-b border-black/20 pb-8 flex flex-col gap-3">
              <h4 className="font-extrabold text-3xl">Data Pasien</h4>
              <div className="flex gap-2 ">
                <div className="flex flex-col gap-2 font-bold">
                  <p>Nama</p>
                  <p>Usia</p>
                  <p>Golongan Darah</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>: {props.dataUser.nama}</p>
                  <p>: {props.dataUser.usia} Tahun</p>
                  <p>: {props.dataUser.golonganDarah}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 border-b border-black/20 pb-8">
              <h4 className="font-extrabold text-3xl">Hasil Diagnosa</h4>
              {props.diagnosa.length > 0 ? (
                <>
                  <p className="text-sm mt-3 text-justify">
                    Berdasarkan seluruh jawaban anda terhadap
                    pertanyaan-pertanyaan yang diberikan, sistem platform
                    PulmoHealth dapat memberikan informasi <b>KEMUNGKINAN</b>{" "}
                    bahwa anda mengalami penyakit paru-paru berikut:
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {props.diagnosa.map((penyakit, index) => (
                      <li key={index} className="font-bold text-lg">
                        {index + 1}. {penyakit.namaPenyakit}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-sm mt-3">{props.diagnosaInfo}</p>
              )}
            </div>
            <p className="my-auto text-justify">
              Hasil diagnosa ini memiliki tingkat akurasi 84.21% berdasarkan
              penelitian, yang berarti tidak 100% akurat. Layanan ini bersifat
              edukatif, bukan solutif, dan tidak menggantikan konsultasi medis
              profesional. Kami sangat menyarankan Anda untuk berkonsultasi
              dengan dokter spesialis paru-paru untuk evaluasi lebih lanjut dan
              penanganan yang tepat. Gunakan hasil ini sebagai langkah awal
              untuk lebih memperhatikan kesehatan paru-paru Anda, namun selalu
              andalkan nasihat dokter untuk keputusan kesehatan yang penting.
              Kesehatan Anda adalah prioritas utama.
            </p>
            <p className="font-bold">
              Terima kasih telah memakai platform kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
