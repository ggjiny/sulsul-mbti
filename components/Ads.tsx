import Script from 'next/script';

export default function Ads() {
  return (
    <>
      <Script id="kakao-ads-1" strategy="lazyOnload">
        {`
          (function() {
            var ins = document.createElement('ins');
            ins.className = 'kakao_ad_area';
            ins.style.display = 'none';
            ins.setAttribute('data-ad-unit', 'DAN-wZWUAFRlWcmpH3xp');
            ins.setAttribute('data-ad-width', '320');
            ins.setAttribute('data-ad-height', '50');
            document.body.appendChild(ins);
            
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
            script.async = true;
            document.body.appendChild(script);
          })();
        `}
      </Script>
      <Script id="kakao-ads-2" strategy="lazyOnload">
        {`
          (function() {
            var container = document.createElement('div');
            container.style.display = 'flex';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.width = '100%';

            var ins = document.createElement('ins');
            ins.className = 'kakao_ad_area';
            ins.style.display = 'none';
            ins.style.margin = '0 auto';
            ins.setAttribute('data-ad-unit', 'DAN-uneFVEuQcdhGgtXe');
            ins.setAttribute('data-ad-width', '728');
            ins.setAttribute('data-ad-height', '90');

            container.appendChild(ins);
            document.body.appendChild(container);
            
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
            script.async = true;
            document.body.appendChild(script);
          })();
        `}
      </Script>
    </>
  );
}
