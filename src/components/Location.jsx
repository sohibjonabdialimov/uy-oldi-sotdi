import React from "react";

const Location = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="common_subtitle">Bizning manzilimiz va aloqa</h1>
      <div className="map_wrap my-5 sm:my-5">
        <div>
          <h2 className="font-bold text-xl">Manzil:</h2>
          <p>100070, Тоshkent shahar, Yunusobod tumani, 19-kvartal</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Ishonch telefoni:</h2>
          <p>(+998 97) 777-55-76</p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "450px",
        }}
      >
        <a
          href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
        >
          Ташкент
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/house/YkAYdQZiTUAEQFprfX92dXxgZA==/?ll=69.312655%2C41.371918&utm_medium=mapframe&utm_source=maps&z=16.51"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          19-й квартал, 8 — Яндекс&nbsp;Карты
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.312655%2C41.371918&mode=whatshere&whatshere%5Bpoint%5D=69.312773%2C41.374124&whatshere%5Bzoom%5D=17&z=16.51"
          width="100%"
          height={450}
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
};

export default Location;
