import React from 'react';

const CirclesSection = () => {
  return (
    <section className="circles-section">
      <div className="container">
        <h2 className="section-title">فهم الوصول إلى المعرفة من خلال دوائر المنتور</h2>
        <p className="circles-caption">
          لتنظيم الوصول والمشاركة والقيادة داخل المجتمع، نستخدم نموذج <strong>دوائر المنتور</strong>. هذه الدوائر تحدد مستويات مختلفة من المشاركة والمسؤولية، مرتبة في طبقات واضحة:
        </p>
        <ul className="circles-list">
          <li><strong>الدائرة الأساسية:</strong> المؤسسون وقادة البرنامج وصناع القرار الرئيسيون.</li>
          <li><strong>دائرة المنتورز:</strong> الأعضاء الكبار الذين يوجهون ويدعمون ويشرفون على الآخرين.</li>
          <li><strong>دائرة المساهمين:</strong> الأعضاء النشطون الذين يساهمون في المشاريع والفعاليات والنقاشات.</li>
          <li><strong>دائرة المجتمع:</strong> جميع الأعضاء الذين يشاركون ويتعلمون وينمون معًا.</li>
        </ul>
        <p className="circles-caption">
          يساعدنا هذا النموذج في تنظيم المشاركة والتعلم واتخاذ القرار بطريقة واضحة وقابلة للتوسع.
        </p>
      </div>
    </section>
  );
};

export default CirclesSection;
