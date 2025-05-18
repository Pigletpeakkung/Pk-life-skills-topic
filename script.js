// ... (rest of your code above remains unchanged)

// Dependency Check Utility
function checkDependencies() {
  const missing = [];
  if (typeof $ === 'undefined') missing.push('jQuery ($)');
  if (typeof _ === 'undefined') missing.push('Lodash (_)');
  if (typeof Swal === 'undefined') missing.push('SweetAlert2 (Swal)');
  if (typeof anime === 'undefined') missing.push('Anime.js (anime)');
  if (missing.length > 0) {
    // Try to alert the user in the most basic way possible
    const message = `Missing dependencies:\n${missing.join('\n')}\n\nPlease ensure these libraries are loaded before this script.`;
    if (typeof alert !== 'undefined') {
      alert(message);
    } else {
      // fallback: log to console
      console.error(message);
    }
    // Optionally, disable main UI interactions
    if (typeof $ !== 'undefined') {
      $('.category-btn, #generateBtn, #toggleSuggestions, #evaluateBtn, #viewEvaluations').prop('disabled', true);
      $('#errorMessage').text(message).show();
    }
    // Prevent further execution
    throw new Error(message);
  }
}

// Run dependency check on document ready or immediately if possible
if (typeof $ !== 'undefined') {
  $(document).ready(checkDependencies);
} else {
  // If jQuery is missing, check immediately
  checkDependencies();
}

// ... (rest of your code below remains unchanged)

const topics = {
 'Psychology & Thinking': {
 'Open Chit Chat': {
 description: 'Open-ended, free-flowing conversations',
 keywords: ['philosophy', 'existence'],
 subtopics: {
 'Hobbies & Pastimes': {
 description: 'Discuss personal interests and leisure activities',
 keywords: ['hobbies', 'leisure'],
 questionTemplates: [
 {
 template: '{verb} อะไรในงานอดิเรกที่ทำให้คุณรู้สึก {emotion}?',
 options: {
 verb: ['ชอบทำ', 'หลงใหล', 'ตื่นเต้นกับ'],
 emotion: ['มีความสุข', 'มีพลัง', 'ผ่อนคลาย']
 }
 },
 {
 template: 'ถ้า {keyword} ของคุณกลายเป็นกีฬาโอลิมปิก คุณจะฝึกอะไรเพื่อคว้าเหรียญทอง?',
 options: { keyword: ['hobby', 'pastime'] }
 },
 {
 template: 'เล่าเรื่อง {context} ที่เกี่ยวกับงานอดิเรกของคุณให้ฟังหน่อย!',
 options: { context: ['น่าจดจำ', 'ตลก', 'น่าประหลาดใจ'] }
 },
 {
 template: 'คุณเคยลองงานอดิเรกใหม่ ๆ ในช่วง {event} หรือไม่? เช่นอะไร?',
 options: { event: ['ปีใหม่', 'สงกรานต์', 'วันหยุดยาว'] }
 },
 {
 template: 'ถ้าคุณต้องสอน {keyword} ให้เพื่อนที่ไม่เคยลอง คุณจะเริ่มจากอะไร?',
 options: { keyword: ['hobby', 'pastime'] }
 }
 ],
 suggestions: {
 howToTalk: [
 'Share a personal story about a hobby you enjoy',
 'Ask others about their favorite pastimes',
 'Discuss how hobbies help with relaxation or creativity'
 ],
 exampleScenario: 'At a gathering, we bonded over shared hobbies like hiking and painting.'
 }
 },
[
  {
    subcategory: 'Hobby Goals',
    prompts: [
      {
        template: 'เป้าหมายต่อไปของคุณใน {keyword} คืออะไร?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมยามว่าง'] }
      },
      {
        template: 'คุณอยากพัฒนาทักษะ {skill} ในงานอดิเรกของคุณอย่างไร?',
        options: { skill: ['ความเร็ว', 'ความคิดสร้างสรรค์', 'ความแม่นยำ'] }
      },
      {
        template: 'ถ้าคุณมีเวลา {time} คุณจะทุ่มเทให้งานอดิเรกอะไร?',
        options: { time: ['หนึ่งเดือนเต็ม', 'ทุกสุดสัปดาห์', 'วันละชั่วโมง'] }
      },
      {
        template: 'งานอดิเรกของคุณจะพาคุณไปถึง {destination} ได้ไหม?',
        options: { destination: ['การแข่งขันระดับโลก', 'นิทรรศการ', 'ชุมชนใหม่'] }
      },
      {
        template: 'คุณวางแผนอะไรใน {event} เพื่อพัฒนางานอดิเรกของคุณ?',
        options: { event: ['วันหยุดยาว', 'ช่วงปิดเทอม', 'ปีหน้า'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Discuss your long-term hobby aspirations',
        'Ask others about their hobby milestones',
        'Share tips on setting achievable hobby goals'
      ],
      exampleScenario: 'At a workshop, we shared our plans to master photography by joining a local club.'
    }
  },
  {
    subcategory: 'Hobby Challenges',
    prompts: [
      {
        template: 'อุปสรรคใหญ่ที่สุดใน {keyword} ของคุณคืออะไร?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมโปรด'] }
      },
      {
        template: 'คุณเคยเจอ {problem} ในงานอดิเรกของคุณไหม? แก้ไขยังไง?',
        options: { problem: ['ขาดแรงจูงใจ', 'ไม่มีเวลา', 'งบจำกัด'] }
      },
      {
        template: 'ถ้าต้องเผชิญ {challenge} คุณจะทำยังไง?',
        options: { challenge: ['ความล้มเหลว', 'การแข่งขัน', 'ความกดดัน'] }
      },
      {
        template: 'อะไรที่ทำให้คุณเกือบเลิก {keyword} และอะไรทำให้คุณไปต่อ?',
        options: { keyword: ['งานอดิเรก', 'ความหลงใหล'] }
      },
      {
        template: 'ในช่วง {event} คุณเจอปัญหาอะไรกับงานอดิเรกบ้าง?',
        options: { event: ['สงกรานต์', 'ปลายปี', 'หน้าฝน'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share a story of overcoming a hobby-related obstacle',
        'Ask others how they stay motivated in their hobbies',
        'Discuss strategies for balancing hobbies with challenges'
      ],
      exampleScenario: 'During a meetup, we laughed about our struggles to find time for baking and shared tips.'
    }
  },
  {
    subcategory: 'Hobby Communities',
    prompts: [
      {
        template: 'คุณเคยเข้าร่วม {group} เกี่ยวกับงานอดิเรกของคุณไหม?',
        options: { group: ['ชมรม', 'กลุ่มออนไลน์', 'งานอีเวนต์'] }
      },
      {
        template: 'ชุมชน {community} ช่วยพัฒนางานอดิเรกของคุณอย่างไร?',
        options: { community: ['เพื่อนร่วมงานอดิเรก', 'โซเชียลมีเดีย', 'เวิร์กช็อป'] }
      },
      {
        template: 'ถ้าคุณจัด {event} สำหรับงานอดิเรก คุณจะทำอะไร?',
        options: { event: ['งานพบปะ', 'การแข่งขัน', 'นิทรรศการ'] }
      },
      {
        template: 'คุณเจอ {person} ที่น่าสนใจจากงานอดิเรกของคุณเมื่อไหร่?',
        options: { person: ['เพื่อนใหม่', 'ครูสอน', 'ผู้เชี่ยวชาญ'] }
      },
      {
        template: 'งานอดิเรกของคุณพาคุณไปรู้จัก {place} หรือยัง?',
        options: { place: ['ชุมชนใหม่', 'สถานที่พิเศษ', 'โลกออนไลน์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Talk about the joy of connecting with hobby communities',
        'Ask others about their favorite hobby groups',
        'Share how communities inspire your hobbies'
      ],
      exampleScenario: 'At a knitting club, we bonded over shared patterns and planned a group project.'
    }
  },
  {
    subcategory: 'Hobby Inspirations',
    prompts: [
      {
        template: 'ใครหรืออะไรที่เป็นแรงบันดาลใจให้คุณเริ่ม {keyword}?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมโปรด'] }
      },
      {
        template: 'คุณได้แรงบันดาลใจจาก {source} สำหรับงานอดิเรกเมื่อไหร่?',
        options: { source: ['หนังสือ', 'โซเชียลมีเดีย', 'เพื่อน'] }
      },
      {
        template: 'ถ้า {person} เห็นงานอดิเรกของคุณ พวกเขาจะพูดอะไร?',
        options: { person: ['ไอดอลของคุณ', 'ครอบครัว', 'เพื่อนสนิท'] }
      },
      {
        template: 'งานอดิเรกของคุณได้รับอิทธิพลจาก {culture} อย่างไร?',
        options: { culture: ['วัฒนธรรมไทย', 'วัฒนธรรมตะวันตก', 'วัฒนธรรมออนไลน์'] }
      },
      {
        template: 'ในช่วง {event} อะไรจุดประกายให้คุณลองงานอดิเรกใหม่?',
        options: { event: ['วันหยุดยาว', 'ปีใหม่', 'สงกรานต์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share who or what sparked your passion for a hobby',
        'Ask others about their hobby inspirations',
        'Discuss how external influences shape hobbies'
      ],
      exampleScenario: 'At a book club, we discussed how a novel inspired us to try gardening.'
    }
  },
  {
    subcategory: 'Hobby Tools',
    prompts: [
      {
        template: 'เครื่องมือหรืออุปกรณ์ที่คุณขาดไม่ได้ใน {keyword} คืออะไร?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมโปรด'] }
      },
      {
        template: 'คุณอยากได้ {tool} ใหม่สำหรับงานอดิเรกของคุณไหม?',
        options: { tool: ['เครื่องมือระดับโปร', 'แอปพลิเคชัน', 'อุปกรณ์พิเศษ'] }
      },
      {
        template: 'ถ้าต้องเลือก {number} อุปกรณ์สำหรับงานอดิเรก คุณเลือกอะไร?',
        options: { number: ['แค่หนึ่ง', 'สาม', 'ห้า'] }
      },
      {
        template: 'คุณเคยลองใช้ {tech} ในงานอดิเรกของคุณหรือยัง?',
        options: { tech: ['เทคโนโลยีใหม่', 'ซอฟต์แวร์', 'แก็ดเจ็ต'] }
      },
      {
        template: 'ในงาน {event} คุณซื้ออุปกรณ์ใหม่สำหรับงานอดิเรกไหม?',
        options: { event: ['งานลดราคา', 'วันหยุดยาว', 'งานแฟร์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Discuss your favorite tools for your hobby',
        'Ask others about their go-to hobby equipment',
        'Share tips on choosing the right hobby tools'
      ],
      exampleScenario: 'At a craft fair, we swapped stories about our favorite paintbrushes and tools.'
    }
  },
  {
    subcategory: 'Hobby Time Management',
    prompts: [
      {
        template: 'คุณหาเวลาทำ {keyword} ได้อย่างไรในชีวิตประจำวัน?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมยามว่าง'] }
      },
      {
        template: 'คุณจัดสรರ್ಷಾಹນມ์เวลา {time} สำหรับงานอดิเรกของคุณเมื่อไหร่?',
        options: { time: ['หลังเลิกงาน', 'วันหยุด', 'ตอนเช้า'] }
      },
      {
        template: 'ถ้ามี {time} คุณจะใช้มันกับงานอดิเรกอย่างไร?',
        options: { time: ['วันว่างทั้งวัน', 'หนึ่งชั่วโมงพิเศษ', 'สุดสัปดาห์'] }
      },
      {
        template: 'งานอดิเรกของคุณช่วยให้คุณจัดการ {issue} ได้อย่างไร?',
        options: { issue: ['ความเครียด', 'ตารางงานยุ่ง', 'ความเหนื่อยล้า'] }
      },
      {
        template: 'ในช่วง {event} คุณจัดเวลาสำหรับงานอดิเรกอย่างไร?',
        options: { event: ['วันหยุดยาว', 'สงกรานต์', 'ปีใหม่'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share how you balance hobbies with a busy schedule',
        'Ask others how they make time for their passions',
        'Discuss the benefits of hobbies for time management'
      ],
      exampleScenario: 'At a coffee shop, we talked about squeezing in yoga sessions during lunch breaks.'
    }
  },
  {
    subcategory: 'Hobby Sharing',
    prompts: [
      {
        template: 'คุณเคยแชร์ {keyword} ของคุณกับคนอื่นไหม? ยังไงบ้าง?',
        options: { keyword: ['งานอดิเรก', 'ผลงาน'] }
      },
      {
        template: 'ถ้าคุณต้องโพสต์เกี่ยวกับ {keyword} บนโซเชียล คุณจะโพสต์อะไร?',
        options: { keyword: ['งานอดิเรก', 'โปรเจกต์ล่าสุด'] }
      },
      {
        template: 'คุณเคยสอน {person} เกี่ยวกับงานอดิเรกของคุณไหม?',
        options: { person: ['เพื่อน', 'ครอบครัว', 'เด็ก ๆ'] }
      },
      {
        template: 'งานอดิเรกของคุณสร้าง {impact} ให้คนอื่นอย่างไร?',
        options: { impact: ['แรงบันดาลใจ', 'ความสุข', 'ความรู้'] }
      },
      {
        template: 'ในงาน {event} คุณแชร์งานอดิเรกของคุณกับใครบ้าง?',
        options: { event: ['งานรวมญาติ', 'งานโรงเรียน', 'งานชุมชน'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Talk about sharing your hobby with others',
        'Ask others how they showcase their hobbies',
        'Discuss the joy of inspiring others through hobbies'
      ],
      exampleScenario: 'At a family gathering, I showed my cousins how to make simple origami.'
    }
  },
  {
    subcategory: 'Hobby Memories',
    prompts: [
      {
        template: 'ความทรงจำที่ดีที่สุดเกี่ยวกับ {keyword} ของคุณคืออะไร?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมโปรด'] }
      },
      {
        template: 'คุณเคยมี {moment} กับงานอดิเรกของคุณเมื่อไหร่?',
        options: { moment: ['ช่วงเวลาน่าจดจำ', 'เหตุการณ์ตลก', 'ความสำเร็จ'] }
      },
      {
        template: 'ถ้าคุณย้อนเวลาได้ คุณจะกลับไปทำ {keyword} เมื่อไหร่?',
        options: { keyword: ['งานอดิเรกครั้งแรก', 'โปรเจกต์เก่า', 'กิจกรรมพิเศษ'] }
      },
      {
        template: 'งานอดิเรกของคุณเตือนคุณถึง {memory} อะไร?',
        options: { memory: ['วัยเด็ก', 'สถานที่พิเศษ', 'คนสำคัญ'] }
      },
      {
        template: 'ในช่วง {event} คุณมีเรื่องราวอะไรเกี่ยวกับงานอดิเรก?',
        options: { event: ['สงกรานต์', 'วันหยุดยาว', 'ปีใหม่'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share a favorite hobby-related memory',
        'Ask others about their most memorable hobby moments',
        'Discuss how hobbies create lasting memories'
      ],
      exampleScenario: 'At a reunion, we reminisced about our childhood days building model airplanes.'
    }
  },
  {
    subcategory: 'Hobby Budget',
    prompts: [
      {
        template: 'คุณจัดการ {budget} สำหรับงานอดิเรกของคุณอย่างไร?',
        options: { budget: ['ค่าใช้จ่าย', 'งบประมาณ'] }
      },
      {
        template: 'ของที่แพงที่สุดที่คุณซื้อเพื่อ {keyword} คืออะไร?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมโปรด'] }
      },
      {
        template: 'คุณเคยประหยัดเงินใน {aspect} ของงานอดิเรกไหม? ยังไง?',
        options: { aspect: ['อุปกรณ์', 'คอร์สเรียน', 'วัสดุ'] }
      },
      {
        template: 'ถ้ามี {amount} คุณจะใช้จ่ายอะไรเพื่องานอดิเรก?',
        options: { amount: ['1,000 บาท', '10,000 บาท', '100,000 บาท'] }
      },
      {
        template: 'ในงาน {event} คุณซื้ออะไรเพื่องานอดิเรกบ้าง?',
        options: { event: ['งานเซลล์', 'วันหยุดยาว', 'งานแฟร์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Discuss how you budget for your hobbies',
        'Ask others about their hobby spending habits',
        'Share tips for enjoying hobbies on a budget'
      ],
      exampleScenario: 'At a craft store, we swapped ideas for affordable DIY supplies.'
    }
  },
  {
    subcategory: 'Hobby Evolution',
    prompts: [
      {
        template: 'งานอดิเรกของคุณเปลี่ยนไปอย่างไรตั้งแต่เริ่มทำ {keyword}?',
        options: { keyword: ['ครั้งแรก', 'เมื่อก่อน'] }
      },
      {
        template: 'คุณพัฒนาทักษะ {skill} ในงานอดิเรกของคุณอย่างไร?',
        options: { skill: ['ความชำนาญ', 'ความคิดสร้างสรรค์', 'ความอดทน'] }
      },
      {
        template: 'ถ้าย้อนเวลาไป คุณจะเปลี่ยน {aspect} ในงานอดิเรกไหม?',
        options: { aspect: ['วิธีเริ่ม', 'อุปกรณ์ที่ใช้', 'เป้าหมาย'] }
      },
      {
        template: 'งานอดิเรกของคุณสะท้อน {change} ในตัวคุณอย่างไร?',
        options: { change: ['การเติบโต', 'รสนิยม', 'มุมมอง'] }
      },
      {
        template: 'ในช่วง {event} งานอดิเรกของคุณเปลี่ยนไปอย่างไร?',
        options: { event: ['ปีที่ผ่านมา', 'วันหยุดยาว', 'สงกรานต์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share how your hobbies have evolved over time',
        'Ask others about changes in their hobby journey',
        'Discuss how hobbies reflect personal growth'
      ],
      exampleScenario: 'At a photography club, we discussed how our styles have changed over the years.'
    }
  },
  {
    subcategory: 'Hobby Benefits',
    prompts: [
      {
        template: 'งานอดิเรกของคุณช่วยคุณในเรื่อง {benefit} อย่างไร?',
        options: { benefit: ['สุขภาพจิต', 'ความมั่นใจ', 'ความสัมพันธ์'] }
      },
      {
        template: 'คุณรู้สึก {emotion} จากงานอดิเรกของคุณเมื่อไหร่?',
        options: { emotion: ['ผ่อนคลาย', 'มีพลัง', 'ภูมิใจ'] }
      },
      {
        template: 'ถ้าไม่มี {keyword} ชีวิตคุณจะขาดอะไร?',
        options: { keyword: ['งานอดิเรก', 'กิจกรรมโปรด'] }
      },
      {
        template: 'งานอดิเรกของคุณสอนอะไรเกี่ยวกับ {lesson}?',
        options: { lesson: ['ความอดทน', 'ความคิดสร้างสรรค์', 'การทำงานเป็นทีม'] }
      },
      {
        template: 'ในช่วง {event} งานอดิเรกช่วยคุณอย่างไร?',
        options: { event: ['เวลาที่ยากลำบาก', 'วันหยุดยาว', 'สงกรานต์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Talk about the positive impact of your hobbies',
        'Ask others how their hobbies benefit them',
        'Discuss the unexpected perks of hobbies'
      ],
      exampleScenario: 'At a wellness event, we shared how running boosts our mood and energy.'
    }
  },
  {
    subcategory: 'Hobby Dreams',
    prompts: [
      {
        template: 'ถ้า {keyword} เป็นอาชีพ คุณอยากทำอะไร?',
        options: { keyword: ['งานอดิเรก', 'ความหลงใหล'] }
      },
      {
        template: 'คุณฝันอยากทำ {project} เกี่ยวกับงานอดิเรกหรือไม่?',
        options: { project: ['โปรเจกต์ใหญ่', 'นิทรรศการ', 'การแข่งขัน'] }
      },
      {
        template: 'ถ้ามี {resource} คุณจะยกระดับงานอดิเรกอย่างไร?',
        options: { resource: ['เงินไม่จำกัด', 'เวลาว่าง', 'ทีมงาน'] }
      },
      {
        template: 'งานอดิเรกของคุณจะพาคุณไปถึง {dream} ได้ไหม?',
        options: { dream: ['ชื่อเสียง', 'การเดินทาง', 'การเปลี่ยนแปลงโลก'] }
      },
      {
        template: 'ใน {event} คุณอยากลองอะไรใหม่ ๆ กับงานอดิเรก?',
        options: { event: ['ปีหน้า', 'วันหยุดยาว', 'สงกรานต์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share your wildest hobby-related dreams',
        'Ask others about their hobby aspirations',
        'Discuss how hobbies fuel big ambitions'
      ],
      exampleScenario: 'At a creative meetup, we dreamed about turning our crafts into a global brand.'
    }
  },
  {
    subcategory: 'Hobby Trends',
    prompts: [
      {
        template: 'เทรนด์อะไรใน {keyword} ที่คุณสนใจตอนนี้?',
        options: { keyword: ['งานอดิเรก', 'วงการนี้'] }
      },
      {
        template: 'คุณเคยลอง {trend} ในงานอดิเรกของคุณหรือยัง?',
        options: { trend: ['เทคนิคใหม่', 'สไตล์ยอดนิยม', 'แอปพลิเคชัน'] }
      },
      {
        template: 'คุณคิดว่า {keyword} จะเปลี่ยนไปอย่างไรในอนาคต?',
        options: { keyword: ['งานอดิเรก', 'วงการนี้'] }
      },
      {
        template: 'อะไรที่ทำให้ {keyword} กลายเป็นที่นิยม?',
        options: { keyword: ['งานอดิเรกของคุณ', 'กิจกรรมนี้'] }
      },
      {
        template: 'ในงาน {event} คุณเห็นเทรนด์อะไรในงานอดิเรก?',
        options: { event: ['งานแฟร์', 'โซเชียลมีเดีย', 'วันหยุดยาว'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Discuss the latest trends in your hobby',
        'Ask others about new developments they’ve noticed',
        'Share predictions for the future of hobbies'
      ],
      exampleScenario: 'At a tech meetup, we explored how AI tools are shaping digital art trends.'
    }
  },
  {
    subcategory: 'Hobby Balance',
    prompts: [
      {
        template: 'คุณสร้างสมดุลระหว่าง {keyword} กับชีวิตประจำวันอย่างไร?',
        options: { keyword: ['งานอดิเรก', 'ความหลงใหล'] }
      },
      {
        template: 'คุณเคยให้ {priority} มากกว่างานอดิเรกไหม? เมื่อไหร่?',
        options: { priority: ['งาน', 'ครอบครัว', 'การเรียน'] }
      },
      {
        template: 'งานอดิเรกของคุณช่วยคุณจัดการ {aspect} ได้อย่างไร?',
        options: { aspect: ['ความสมดุลในชีวิต', 'ความเครียด', 'ตารางงาน'] }
      },
      {
        template: 'ถ้าคุณมีเวลา {time} คุณจะแบ่งให้งานอดิเรกเท่าไหร่?',
        options: { time: ['หนึ่งวัน', 'หนึ่งสัปดาห์', 'หนึ่งเดือน'] }
      },
      {
        template: 'ในช่วง {event} คุณรักษาสมดุลของงานอดิเรกอย่างไร?',
        options: { event: ['ช่วงงานยุ่ง', 'วันหยุดยาว', 'สงกรานต์'] }
      }
    ],
    suggestions: {
      howToTalk: [
        'Share how you juggle hobbies with other responsibilities',
        'Ask others about their work-hobby balance',
        'Discuss the role of hobbies in a balanced life'
      ],
      exampleScenario: 'At a team meeting, we talked about fitting in weekend hikes despite busy schedules.'
    }
  }
]
 }
 },
'Advice & Support': {
  description: 'Providing support and advice',
  subtopics: {
    'Self Help': {
      description: 'Strategies for personal growth and self-improvement',
      keywords: ['self-improvement', 'motivation'],
      questionTemplates: [
        {
          template: 'คุณใช้ {method} อะไรเพื่อพัฒนา {keyword} ในชีวิตประจำวัน?',
          options: {
            method: ['วิธี', 'เทคนิค', 'กิจวัตร'],
            keyword: ['ความมั่นใจ', 'วินัย']
          }
        },
        {
          template: 'เมื่อเจอ {challenge} คุณทำยังไงเพื่อก้าวต่อไป?',
          options: {
            challenge: ['ความ ภาวะหมดไฟ', 'ความล้มเหลว', 'ความเครียด']
          }
        },
        {
          template: 'ถ้าคุณให้คำแนะนำเกี่ยวกับ {keyword} แก่ตัวเองในอดีต คุณจะบอกอะไร?',
          options: {
            keyword: ['การดูแลตัวเอง', 'การเติบโตส่วนบุคคล']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a personal growth story or tip',
          'Ask others about their self-help routines',
          'Encourage small, actionable steps for improvement'
        ],
        exampleScenario: 'At a workshop, we shared morning routines that boost our motivation.'
      }
    },
    'Emotional Support': {
      description: 'Providing empathy and understanding for emotional challenges',
      keywords: ['emotions', 'support'],
      questionTemplates: [
        {
          template: 'คุณจัดการกับ {emotion} อย่างไรในช่วงเวลาที่ยากลำบาก?',
          options: {
            emotion: ['ความเศร้า', 'ความกังวล', 'ความโกรธ']
          }
        },
        {
          template: 'อะไรที่ช่วยให้คุณรู้สึก {state} เมื่อเผชิญ {situation}?',
          options: {
            state: ['สงบ', 'มีพลัง', 'ได้รับการสนับสนุน'],
            situation: ['ความสูญเสีย', 'ความขัดแย้ง', 'ความกดดัน']
          }
        },
        {
          template: 'คุณเคยช่วย {person} ผ่าน {issue} อย่างไร?',
          options: {
            person: ['เพื่อน', 'สมาชิกครอบครัว'],
            issue: ['วิกฤตทางอารมณ์', 'ช่วงเวลาที่ยากลำบาก']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Listen actively and validate feelings',
          'Share a story of emotional resilience',
          'Offer gentle, non-judgmental advice'
        ],
        exampleScenario: 'During a coffee chat, I listened as a friend shared their struggles and felt lighter afterward.'
      }
    },
    'Cultural Advice': {
      description: 'Navigating cultural norms and traditions, especially in Thailand',
      keywords: ['culture', 'tradition'],
      questionTemplates: [
        {
          template: 'คุณปรับตัวเข้ากับ {aspect} ของวัฒนธรรมไทยอย่างไร?',
          options: {
            aspect: ['มารยาท', 'งานเทศกาล', 'การสื่อสาร']
          }
        },
        {
          template: 'ในช่วง {event} คุณทำอะไรเพื่อเชื่อมโยงกับชุมชน?',
          options: {
            event: ['สงกรานต์', 'ลอยกระทง', 'วันสงกรานต์']
          }
        },
        {
          template: 'อะไรคือ {keyword} ที่คุณอยากแบ่งปันกับคนที่ไม่คุ้นเคยกับวัฒนธรรมไทย?',
          options: {
            keyword: ['ประเพณี', 'ค่านิยม', 'มารยาท']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a cultural experience or lesson',
          'Ask about others’ cultural traditions',
          'Explain cultural nuances with respect'
        ],
        exampleScenario: 'At a festival, we discussed the meaning of Loy Krathong and its importance.'
      }
    },
    'Work & Professional Advice': {
      description: 'Guidance for career growth and workplace challenges',
      keywords: ['career', 'professionalism'],
      questionTemplates: [
        {
          template: 'คุณจัดการกับ {issue} ในที่ทำงานอย่างไร?',
          options: {
            issue: ['ความขัดแย้ง', 'ความกดดัน', 'ความสมดุลระหว่างงานและชีวิต']
          }
        },
        {
          template: 'อะไรคือ {keyword} ที่ช่วยให้คุณประสบความสำเร็จในอาชีพ?',
          options: {
            keyword: ['ทักษะ', 'ทัศนคติ', 'กลยุทธ์']
          }
        },
        {
          template: 'ถ้าคุณแนะนำ {person} เกี่ยวกับ {aspect} คุณจะบอกอะไร?',
          options: {
            person: ['น้องใหม่ในที่ทำงาน', 'เพื่อนร่วมงาน'],
            aspect: ['การเลื่อนตำแหน่ง', 'การจัดการเวลา']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a career lesson or success story',
          'Ask about others’ professional goals',
          'Offer practical workplace tips'
        ],
        exampleScenario: 'At a networking event, we swapped strategies for managing tight deadlines.'
      }
    },
    'Parenting Support': {
      description: 'Advice for raising children and family dynamics',
      keywords: ['parenting', 'family'],
      questionTemplates: [
        {
          template: 'คุณจัดการกับ {challenge} ในฐานะผู้ปกครองอย่างไร?',
          options: {
            challenge: ['พฤติกรรมของเด็ก', 'การสื่อสาร', 'ความสมดุล']
          }
        },
        {
          template: 'อะไรคือ {keyword} ที่คุณอยากสอนลูกของคุณ?',
          options: {
            keyword: ['ค่านิยม', 'ทักษะ', 'ทัศนคติ']
          }
        },
        {
          template: 'คุณสร้าง {moment} กับครอบครัวในช่วง {event} อย่างไร?',
          options: {
            moment: ['ความทรงจำพิเศษ', 'ช่วงเวลาการเรียนรู้'],
            event: ['วันหยุด', 'วันเกิด', 'สงกรานต์']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a parenting win or challenge',
          'Ask about others’ family traditions',
          'Offer empathetic parenting advice'
        ],
        exampleScenario: 'At a school event, parents shared tips for helping kids with homework.'
      }
    },
    'Life Transitions': {
      description: 'Support for major life changes and adjustments',
      keywords: ['change', 'transition'],
      questionTemplates: [
        {
          template: 'คุณรับมือกับ {transition} ในชีวิตอย่างไร?',
          options: {
            transition: ['การย้ายบ้าน', 'การเปลี่ยนงาน', 'การสูญเสีย']
          }
        },
        {
          template: 'อะไรช่วยให้คุณรู้สึก {state} ระหว่าง {event}?',
          options: {
            state: ['มั่นใจ', 'สงบ', 'มีพลัง'],
            event: ['การเริ่มต้นใหม่', 'การเปลี่ยนแปลงครั้งใหญ่']
          }
        },
        {
          template: 'คุณให้คำแนะนำอะไรแก่คนที่กำลังเผชิญ {keyword}?',
          options: {
            keyword: ['การเปลี่ยนแปลง', 'ความไม่แน่นอน']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a story of navigating change',
          'Ask about others’ life transitions',
          'Offer encouragement for embracing new phases'
        ],
        exampleScenario: 'During a support group, we discussed coping with career shifts.'
      }
    },
    'Addiction Recovery': {
      description: 'Support for overcoming addiction and rebuilding life',
      keywords: ['recovery', 'addiction'],
      questionTemplates: [
        {
          template: 'อะไรช่วยคุณใน {stage} ของการฟื้นฟูจาก {keyword}?',
          options: {
            stage: ['ช่วงเริ่มต้น', 'การรักษา', 'การป้องกันการกลับไป'],
            keyword: ['การติดยา', 'พฤติกรรมที่ไม่ดี']
          }
        },
        {
          template: 'คุณพบ {resource} อะไรที่สนับสนุนการฟื้นฟูของคุณ?',
          options: {
            resource: ['ชุมชน', 'เครื่องมือ', 'แรงบันดาลใจ']
          }
        },
        {
          template: 'คุณให้คำแนะนำอะไรแก่ {person} ที่เริ่มต้นการฟื้นฟู?',
          options: {
            person: ['เพื่อน', 'สมาชิกครอบครัว']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a recovery milestone with sensitivity',
          'Ask about others’ support systems',
          'Encourage seeking professional help when needed'
        ],
        exampleScenario: 'In a support group, we celebrated small victories in staying sober.'
      }
    },
    'Identity & Belonging': {
      description: 'Exploring personal identity and finding community',
      keywords: ['identity', 'belonging'],
      questionTemplates: [
        {
          template: 'คุณค้นพบ {aspect} ของตัวตนคุณผ่านอะไร?',
          options: {
            aspect: ['ความเชื่อ', 'ค่านิยม', 'ความหลงใหล']
          }
        },
        {
          template: 'อะไรทำให้คุณรู้สึก {state} ในชุมชนของคุณ?',
          options: {
            state: ['เป็นส่วนหนึ่ง', 'ได้รับการยอมรับ', 'มีคุณค่า']
          }
        },
        {
          template: 'คุณช่วย {person} ค้นหาความรู้สึกเป็นส่วนหนึ่งอย่างไร?',
          options: {
            person: ['เพื่อน', 'คนรุ่นใหม่']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a story of finding your place',
          'Ask about others’ sense of identity',
          'Celebrate diverse identities and communities'
        ],
        exampleScenario: 'At a cultural event, we discussed what makes us feel connected.'
      }
    },
    'Psychological Consultation': {
      description: 'Guidance for mental health and emotional well-being',
      keywords: ['mental health', 'therapy'],
      questionTemplates: [
        {
          template: 'คุณดูแล {aspect} ของสุขภาพจิตอย่างไร?',
          options: {
            aspect: ['ความเครียด', 'ความสมดุล', 'ความยืดหยุ่น']
          }
        },
        {
          template: 'อะไรที่ช่วยให้คุณรู้สึก {state} เมื่อเผชิญ {issue}?',
          options: {
            state: ['สงบ', 'มั่นใจ', 'มีสมาธิ'],
            issue: ['ความกังวล', 'ภาวะซึมเศร้า', 'ความกดดัน']
          }
        },
        {
          template: 'คุณแนะนำ {resource} อะไรสำหรับคนที่ต้องการความช่วยเหลือด้านจิตใจ?',
          options: {
            resource: ['นักบำบัด', 'แอปพลิเคชัน', 'ชุมชน']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Discuss mental health openly and without stigma',
          'Ask about others’ self-care practices',
          'Encourage seeking professional support when needed'
        ],
        exampleScenario: 'In a wellness group, we shared mindfulness techniques for stress relief.'
      }
    },
    'Personal Development': {
      description: 'Fostering growth in skills, mindset, and goals',
      keywords: ['growth', 'development'],
      questionTemplates: [
        {
          template: 'คุณพัฒนา {skill} ในตัวคุณอย่างไรในช่วงที่ผ่านมา?',
          options: {
            skill: ['ความเป็นผู้นำ', 'การสื่อสาร', 'ความคิดสร้างสรรค์']
          }
        },
        {
          template: 'อะไรคือ {keyword} ที่คุณอยากทำให้ดีขึ้นในปีนี้?',
          options: {
            keyword: ['เป้าหมายส่วนตัว', 'นิสัย', 'ทักษะ']
          }
        },
        {
          template: 'คุณเรียนรู้ {lesson} อะไรจากการเติบโตส่วนบุคคลของคุณ?',
          options: {
            lesson: ['ความอดทน', 'ความยืดหยุ่น', 'การยอมรับตัวเอง']
          }
        }
      ],
      suggestions: {
        howToTalk: [
          'Share a personal development milestone',
          'Ask about others’ growth journeys',
          'Inspire actionable steps for self-improvement'
        ],
        exampleScenario: 'At a book club, we discussed how a self-help book changed our mindsets.'
      }
    }
  }
},
'Learning & Curiosity': {
  'Information-Seeking': {
    description: 'Exploring and sharing knowledge across diverse domains',
    keywords: ['knowledge', 'curiosity', 'facts', 'trends'],
    subtopics: {
      'Travel & Places': {
        description: 'Discovering destinations, cultures, and travel tips',
        keywords: ['travel', 'destinations', 'culture'],
        questions: [
          'What’s a place you’ve visited that surprised you?',
          'Which Thai destination would you recommend to a first-time traveler?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a fun travel story'], 
            exampleScenario: 'We swapped tales about beach trips to Phuket!' 
          },
          Formal: { 
            howToTalk: ['Discuss travel logistics or cultural insights'], 
            exampleScenario: 'A guidebook highlighted Chiang Mai’s temples.' 
          },
          Compassionate: { 
            howToTalk: ['Acknowledge travel barriers like budget or time'], 
            exampleScenario: 'We discussed affordable local getaways.' 
          }
        }
      },
      'Financial Knowledge (generalist)': {
        description: 'Understanding personal finance, budgeting, and investments',
        keywords: ['finance', 'budgeting', 'investing'],
        questions: [
          'What’s one money-saving tip you swear by?',
          'How do you approach investing in Thailand’s economy?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a budgeting hack'], 
            exampleScenario: 'We laughed about cutting coffee expenses!' 
          },
          Formal: { 
            howToTalk: ['Reference financial trends or data'], 
            exampleScenario: 'A report showed rising interest in mutual funds.' 
          },
          Compassionate: { 
            howToTalk: ['Recognize financial stress or inequality'], 
            exampleScenario: 'We discussed managing expenses on a tight budget.' 
          }
        }
      },
      'Tech & Engineering': {
        description: 'Exploring innovations, gadgets, and technical advancements',
        keywords: ['technology', 'engineering', 'innovation'],
        questions: [
          'What’s a new gadget or app you’re excited about?',
          'How do you think AI is shaping Thailand’s tech scene?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Geek out over a cool tech fact'], 
            exampleScenario: 'We raved about the latest smartphone features!' 
          },
          Formal: { 
            howToTalk: ['Discuss technical specs or industry trends'], 
            exampleScenario: 'A study predicted growth in Thailand’s 5G network.' 
          },
          Compassionate: { 
            howToTalk: ['Acknowledge the digital divide or learning curves'], 
            exampleScenario: 'We talked about teaching tech to older relatives.' 
          }
        }
      },
      'Entertainment & Pop-culture': {
        description: 'Discussing movies, music, and celebrity trends',
        keywords: ['entertainment', 'pop-culture', 'media'],
        questions: [
          'What’s a movie or series you can’t stop talking about?',
          'Which Thai artist or show is trending right now?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a binge-watching recommendation'], 
            exampleScenario: 'We debated the best Thai lakorn!' 
          },
          Formal: { 
            howToTalk: ['Analyze media trends or cultural impact'], 
            exampleScenario: 'A report noted Thai dramas gaining global fans.' 
          },
          Compassionate: { 
            howToTalk: ['Recognize escapism or emotional connections to media'], 
            exampleScenario: 'We shared how music helped during tough times.' 
          }
        }
      },
      'Sports': {
        description: 'Exploring athletic events, teams, and fitness trends',
        keywords: ['sports', 'fitness', 'athletics'],
        questions: [
          'What’s your favorite sport to watch or play?',
          'How big is Muay Thai’s influence in modern sports culture?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a sports highlight or personal win'], 
            exampleScenario: 'We cheered about a recent football match!' 
          },
          Formal: { 
            howToTalk: ['Discuss sports stats or industry growth'], 
            exampleScenario: 'A study showed rising interest in e-sports.' 
          },
          Compassionate: { 
            howToTalk: ['Acknowledge barriers to sports access'], 
            exampleScenario: 'We discussed community sports for kids.' 
          }
        }
      },
      'Politics': {
        description: 'Understanding governance, policies, and civic issues',
        keywords: ['politics', 'policy', 'governance'],
        questions: [
          'What’s a recent policy change you’ve followed?',
          'How do you stay informed about Thai politics?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a light take on a political topic'], 
            exampleScenario: 'We joked about election campaign ads!' 
          },
          Formal: { 
            howToTalk: ['Reference policy details or historical context'], 
            exampleScenario: 'A news report analyzed Thailand’s economic policies.' 
          },
          Compassionate: { 
            howToTalk: ['Acknowledge diverse perspectives or political fatigue'], 
            exampleScenario: 'We discussed how policies affect local communities.' 
          }
        }
      },
      'General Knowledge': {
        description: 'Broad facts and trivia across various fields',
        keywords: ['trivia', 'facts', 'knowledge'],
        questions: [
          'What’s a random fact you recently learned?',
          'What’s something everyone should know about Thai history?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a quirky fact or trivia'], 
            exampleScenario: 'We had fun with a Thai history quiz!' 
          },
          Formal: { 
            howToTalk: ['Discuss verified information or sources'], 
            exampleScenario: 'A documentary taught us about ancient Siam.' 
          },
          Compassionate: { 
            howToTalk: ['Celebrate curiosity in all forms'], 
            exampleScenario: 'We shared facts to inspire lifelong learning.' 
          }
        }
      },
      'Cooking & Food': {
        description: 'Exploring recipes, cuisines, and culinary trends',
        keywords: ['cooking', 'food', 'cuisine'],
        questions: [
          'What’s a dish you love to cook or eat?',
          'Which Thai dish do you think deserves global fame?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Swap a favorite recipe or food hack'], 
            exampleScenario: 'We raved about homemade som tam!' 
          },
          Formal: { 
            howToTalk: ['Discuss culinary techniques or food trends'], 
            exampleScenario: 'A chef shared tips on Thai fusion cuisine.' 
          },
          Compassionate: { 
            howToTalk: ['Acknowledge food’s role in culture or comfort'], 
            exampleScenario: 'We talked about family recipes passed down.' 
          }
        }
      },
      'Civics': {
        description: 'Understanding community engagement and civic responsibilities',
        keywords: ['civics', 'community', 'duty'],
        questions: [
          'What’s one way you’ve contributed to your community?',
          'How do Thai citizens participate in local governance?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a community event story'], 
            exampleScenario: 'We chatted about a local cleanup day!' 
          },
          Formal: { 
            howToTalk: ['Discuss civic systems or laws'], 
            exampleScenario: 'A seminar explained Thailand’s voting process.' 
          },
          Compassionate: { 
            howToTalk: ['Recognize challenges in civic engagement'], 
            exampleScenario: 'We discussed making communities inclusive.' 
          }
        }
      },
      'DIY & Home Improvement': {
        description: 'Exploring crafts, repairs, and home projects',
        keywords: ['DIY', 'home', 'crafts'],
        questions: [
          'What’s a DIY project you’re proud of?',
          'What’s a popular home improvement trend in Thailand?'
        ],
        suggestions: {
          Casual: { 
            howToTalk: ['Share a DIY tip or project idea'], 
            exampleScenario: 'We laughed about our painting mishaps!' 
          },
          Formal: { 
            howToTalk: ['Discuss materials or design trends'], 
            exampleScenario: 'A blog highlighted eco-friendly home upgrades.' 
          },
          Compassionate: { 
            howToTalk: ['Acknowledge budget or skill barriers'], 
            exampleScenario: 'We shared affordable decor ideas.' 
          }
        }
      }
    }
  }
 },
 'Educational': {
 description: 'Structured learning discussions',
 subtopics: {
 'Psychological Concepts': {
 description: 'Psychological theories and critical thinking',
 keywords: ['psychology', 'cognition'],
 questionTemplates: [
 {
 template: 'แนวคิด {keyword} อะไรที่คุณพบว่า {impact} ในชีวิตประจำวัน?',
 options: {
 keyword: ['psychological', 'cognitive'],
 impact: ['น่าสนใจ', 'มีประโยชน์']
 }
 },
 {
 template: 'ถ้าคุณต้องอธิบาย {keyword} ให้ {person} คุณจะพูดอะไร?',
 options: {
 keyword: ['cognitive bias', 'growth mindset'],
 person: ['เพื่อน', 'นักเรียน']
 }
 },
 {
 template: 'คุณคิดว่า {keyword} สามารถช่วยแก้ปัญหา {issue} ในสังคมไทยได้อย่างไร?',
 options: {
 keyword: ['psychology', 'thinking'],
 issue: ['ความเครียด', 'การสื่อสาร']
 }
 }
 ],
 suggestions: {
 howToTalk: [
 'Share a psychology fact or insight',
 'Discuss critical thinking strategies',
 'Encourage reflection on mental processes'
 ],
 exampleScenario: 'In a class, we debated why we procrastinate.'
 }
 },
 // Add Meditation & Mindfulness, Virtual Field Trip
 }
 }
 }
};
function generateDiscussionPrompts(subtopic) {
 const templates = subtopic.questionTemplates || [];
 const selectedTemplates = _.sampleSize(_.shuffle(templates), _.random(2, 3));
 const generatedQuestions = selectedTemplates.map(tmpl => {
 let question = tmpl.template;
 _.forEach(tmpl.options, (values, key) => {
 const value = _.sample(values);
 question = question.replace(`{${key}}`, value);
 });
 return question;
 });

 recentQuestions.push(...generatedQuestions);
 if (recentQuestions.length > templates.length * 2) {
 recentQuestions = recentQuestions.slice(-templates.length);
 }

 const promptTemplates = [
 { question: `{q}`, approach: `Share a story about ${subtopic.keywords[0]}.` },
 { question: `{q}`, approach: `Ask others about their thoughts on ${subtopic.keywords[1] || subtopic.keywords[0]}.` },
 { question: `{q}`, approach: `Discuss how ${subtopic.keywords[0]} impacts daily life.` }
 ];

 return generatedQuestions.map(q => {
 const template = _.sample(promptTemplates);
 return `
 <div class="qa-prompt">
 <p class="qa-question">${template.question.replace('{q}', q)}</p>
 <p class="qa-answer">${template.approach}</p>
 </div>
 `;
 }).join('');
}
// State Variables
let selectedCategory = '';
let recentTopics = {};
let recentQuestions = [];

// Validate Subcategory Exclusivity
function validateSubcategoryExclusivity() {
 const allSubtopics = new Set();
 const duplicates = [];
 _.forEach(topics, (categoryData, category) => {
 _.forEach(categoryData, (topicData, topic) => {
 const subtopics = topicData.subtopics || {};
 _.forEach(subtopics, (subtopic, subtopicKey) => {
 if (allSubtopics.has(subtopicKey)) {
 duplicates.push(subtopicKey);
 } else {
 allSubtopics.add(subtopicKey);
 }
 });
 });
 });
 if (duplicates.length > 0) {
 console.error(`Duplicate subcategories: ${duplicates.join(', ')}`);
 return false;
 }
 return true;
}

// Set Category
function setCategory(category) {
 selectedCategory = category;
 $('.category-btn').removeClass('selected').filter(`:contains(${category})`).addClass('selected');
 resetSuggestions();
 checkSelections();
}

// Check Selections
function checkSelections() {
 $('#generateBtn').prop('disabled', !selectedCategory);
}

// Reset Suggestions
function resetSuggestions() {
 $('#topicSuggestion').text('');
 $('#topicDescription').text('');
 $('#howToTalk').empty();
 $('#exampleScenario').text('');
 $('#discussionPrompts').empty();
 $('#autoSuggestions').removeClass('show');
 $('#toggleSuggestions').hide();
 $('#evaluateBtn').hide();
}

// Get Random Topic
function getRandomTopic(categoryData, recent) {
 const topicKeys = _.keys(categoryData).filter(key => !recent.includes(key));
 if (topicKeys.length === 0) {
 recent.length = 0;
 return _.sample(_.keys(categoryData));
 }
 return _.sample(topicKeys);
}

// Get Random Subtopic
function getRandomSubtopic(subtopics, recentSubtopics) {
 const subtopicKeys = _.keys(subtopics).filter(key => !recentSubtopics.includes(key));
 if (subtopicKeys.length === 0) {
 recentSubtopics.length = 0;
 return _.sample(_.keys(subtopics));
 }
 return _.sample(subtopicKeys);
}

// Get Dynamic Feedback
function getDynamicFeedback(subtopicKey) {
 const feedback = [
 `Great for engaging chats about ${subtopicKey.toLowerCase()}!`,
 `Dive into ${subtopicKey.toLowerCase()} with curiosity.`,
 `This ${subtopicKey.toLowerCase()} topic sparks lively discussions.`
 ];
 return _.sample(feedback);
}

// Save Evaluation to localStorage
function saveEvaluation(evaluation) {
 const evaluations = JSON.parse(localStorage.getItem('evaluations') || '[]');
 evaluations.push({
 ...evaluation,
 timestamp: new Date().toISOString()
 });
 localStorage.setItem('evaluations', JSON.stringify(evaluations));
}

// Show Evaluation Form
function showEvaluationForm(subtopicKey) {
 Swal.fire({
 title: 'Evaluate Your Discussion',
 html: `
 <div class="mb-3">
 <label class="form-label">Mood Tone (1-7, 1=Not Engaged, 7=Easy and Flow)</label>
 <input type="number" id="moodTone" class="form-control" min="1" max="7" value="1">
 </div>
 <div class="mb-3">
 <label class="form-label">Correctness (1-5, 1=Incorrect, 5=Factually Sound)</label>
 <input type="number" id="correctness" class="form-control" min="1" max="5" value="1">
 </div>
 <div class="mb-3">
 <label class="form-label">Relevance (1-5, 1=Irrelevant, 5=Highly Relevant)</label>
 <input type="number" id="relevance" class="form-control" min="1" max="5" value="1">
 </div>
 <div class="mb-3">
 <label class="form-label">Audio Quality (1-5, 1=Major Issues, 5=Perfect)</label>
 <input type="number" id="audioQuality" class="form-control" min="1" max="5" value="1">
 </div>
 <div class="mb-3">
 <label class="form-label">PII (1-5, 1=Major Issues, 5=None)</label>
 <input type="number" id="pii" class="form-control" min="1" max="5" value="1">
 </div>
 `,
 showCancelButton: true,
 confirmButtonText: 'Submit Evaluation',
 preConfirm: () => {
 return {
 subtopic: subtopicKey,
 moodTone: parseInt(document.getElementById('moodTone').value),
 correctness: parseInt(document.getElementById('correctness').value),
 relevance: parseInt(document.getElementById('relevance').value),
 audioQuality: parseInt(document.getElementById('audioQuality').value),
 pii: parseInt(document.getElementById('pii').value)
 };
 }
 }).then(result => {
 if (result.isConfirmed) {
 saveEvaluation(result.value);
 Swal.fire('Thank You!', 'Your evaluation has been saved locally.', 'success');
 }
 });
}

// View Past Evaluations
function viewEvaluations() {
 const evaluations = JSON.parse(localStorage.getItem('evaluations') || '[]');
 if (evaluations.length === 0) {
 Swal.fire('No Evaluations', 'No past evaluations found.', 'info');
 return;
 }

 const html = evaluations.map((eval, index) => `
 <div class="mb-3">
 <strong>Evaluation ${index + 1} (${eval.subtopic}) - ${new Date(eval.timestamp).toLocaleString()}</strong>
 <p>Mood Tone: ${eval.moodTone}/7</p>
 <p>Correctness: ${eval.correctness}/5</p>
 <p>Relevance: ${eval.relevance}/5</p>
 <p>Audio Quality: ${eval.audioQuality}/5</p>
 <p>PII: ${eval.pii}/5</p>
 </div>
 `).join('');

 Swal.fire({
 title: 'Past Evaluations',
 html,
 showConfirmButton: true,
 confirmButtonText: 'Close'
 });
}

// Generate Topic
function generateTopic() {
 const $errorMessage = $('#errorMessage').hide();

 if (!selectedCategory) {
 $errorMessage.text('Please select a category.').show();
 return;
 }

 const categoryData = topics[selectedCategory];
 if (!categoryData) {
 $errorMessage.text(`No topics for ${selectedCategory}.`).show();
 return;
 }

 const topicKey = getRandomTopic(categoryData, recentTopics[selectedCategory] || []);
 recentTopics[selectedCategory] = (recentTopics[selectedCategory] || []).concat(topicKey);
 const topic = categoryData[topicKey];

 const subtopics = topic.subtopics || {};
 const recentSubtopics = recentTopics[topicKey] || [];
 const subtopicKey = getRandomSubtopic(subtopics, recentSubtopics);
 recentTopics[topicKey] = recentSubtopics.concat(subtopicKey);
 const subtopic = subtopics[subtopicKey];

 if (!subtopic) {
 $errorMessage.text(`No subtopics for ${topicKey}.`).show();
 return;
 }

 $('#categoryTitle').text(`Category: ${selectedCategory}`);
 $('#topicSuggestion').text(subtopicKey);
 $('#topicDescription').text(`${subtopic.description} ${getDynamicFeedback(subtopicKey)}`);

 const suggestions = subtopic.suggestions || {};
 if (!suggestions.howToTalk) {
 $errorMessage.text(`No suggestions for ${subtopicKey}.`).show();
 return;
 }

 $('#howToTalk').html(suggestions.howToTalk.map(item => `<li>${item}</li>`).join(''));
 $('#exampleScenario').text(suggestions.exampleScenario || 'No scenario available.');
 $('#discussionPrompts').html(generateDiscussionPrompts(subtopic));

 // Animate UI
 anime({
 targets: '#autoSuggestions',
 opacity: [0, 1],
 translateY: [20, 0],
 duration: 500,
 easing: 'easeOutQuad'
 });

 $('#autoSuggestions').addClass('show');
 $('#toggleSuggestions').show();
 $('#evaluateBtn').show();
}

// Toggle Suggestions
function toggleSuggestions() {
 $('#autoSuggestions').toggleClass('show');
}

// Event Listeners
$(document).ready(() => {
 validateSubcategoryExclusivity();

 $('.category-btn').on('click', function() {
 setCategory($(this).text());
 });

 $('#generateBtn').on('click', generateTopic);

 $('#toggleSuggestions').on('click', toggleSuggestions);

 $('#evaluateBtn').on('click', () => {
 const subtopicKey = $('#topicSuggestion').text();
 showEvaluationForm(subtopicKey);
 });

 $('#viewEvaluations').on('click', viewEvaluations);
});
