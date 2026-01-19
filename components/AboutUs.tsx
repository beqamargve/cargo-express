
import React from 'react';
import { CheckCircle2, Award, Users, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-sky-500/20 blur-3xl rounded-full opacity-30"></div>
          <div className="relative glass p-4 rounded-[3rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[2.5rem] w-full h-[600px] object-cover"
              alt="About Autoport Pro"
            />
          </div>
        </div>

        <div>
          <span className="text-sky-500 font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">ჩვენს შესახებ</span>
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            თქვენი მეგზური <br/><span className="text-sky-500">ამერიკულ ბაზარზე</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
            AUTOPORT PRO არის ლიცენზირებული ლოჯისტიკური კომპანია, რომელიც წლებია უზრუნველყოფს ავტომობილების უსაფრთხო იმპორტს აშშ-დან საქართველომდე. ჩვენი გუნდი მუშაობს 24/7-ზე, რათა თქვენ მიიღოთ საუკეთესო სერვისი და გამჭვირვალე ტარიფები.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Award className="text-sky-400" />, title: 'ლიცენზირებული', text: 'ოფიციალური წვდომა ყველა აუქციონზე' },
              { icon: <Users className="text-sky-400" />, title: '500+ დილერი', text: 'ენდობიან ჩვენს პროფესიონალიზმს' },
              { icon: <Globe className="text-sky-400" />, title: 'გლობალური ქსელი', text: 'ყველა პორტიდან ტრანსპორტირება' },
              { icon: <CheckCircle2 className="text-sky-400" />, title: 'დაზღვეული', text: 'სრული პასუხისმგებლობა ტვირთზე' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 glass rounded-2xl hover:border-sky-500/30 transition-all">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-black text-sm uppercase mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
