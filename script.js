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
 // Add other 14 subcategories
 }
 },
 'Advice & Support': {
 description: 'Providing support and advice',
 subtopics: {
 'Business Insights': {
 description: 'Entrepreneurial strategies and workplace innovation',
 keywords: ['business', 'leadership'],
 questionTemplates: [
 {
 template: 'คุณเคยเจอ {challenge} ใน {keyword} แล้วแก้ไขยังไง?',
 options: {
 challenge: ['ความท้าทาย', 'อุปสรรค', 'ปัญหา'],
 keyword: ['business', 'leadership']
 }
 },
 {
 template: 'ถ้าคุณเป็น {role} ในบริษัทสตาร์ทอัพ คุณจะ {action} ยังไง?',
 options: {
 role: ['ผู้นำ', 'ที่ปรึกษา'],
 action: ['สร้างแรงบันดาลใจให้ทีม', 'จัดการวิกฤต']
 }
 },
 {
 template: 'อะไรคือ {keyword} ที่คุณคิดว่า {group} ในไทยควรลองใช้?',
 options: {
 keyword: ['นวัตกรรม', 'กลยุทธ์'],
 group: ['เจ้าของธุรกิจขนาดเล็ก', 'ผู้จัดการ']
 }
 }
 ],
 suggestions: {
 howToTalk: [
 'Share a practical business tip or story',
 'Discuss strategies for leadership and innovation',
 'Encourage empathy for workplace challenges'
 ],
 exampleScenario: 'In a meeting, we discussed how empathetic leadership boosted team morale.'
 }
 },
 // Add other 10 subcategories
 }
 }
 },
 'Learning & Curiosity': {
 'Information-Seeking': {
 description: 'Sharing knowledge across domains',
 subtopics: {
 'Business': {
 description: 'Industry trends and market insights',
 keywords: ['business', 'trends'],
 questionTemplates: [
 {
 template: 'เทรนด์ {keyword} ล่าสุดที่คุณเห็นใน {industry} คืออะไร?',
 options: {
 keyword: ['business', 'market'],
 industry: ['เทคโนโลยี', 'การค้าปลีก', 'การท่องเที่ยว']
 }
 },
 {
 template: 'ถ้าคุณต้องลงทุนใน {keyword} ในประเทศไทย คุณจะเลือกอะไรและทำไม?',
 options: { keyword: ['บริษัท', 'เทรนด์'] }
 },
 {
 template: 'เล่าเรื่อง {context} เกี่ยวกับ {keyword} ที่คุณเจอในข่าว!',
 options: { context: ['น่าตื่นเต้น', 'น่าประหลาดใจ'] }
 }
 ],
 suggestions: {
 howToTalk: [
 'Share an interesting business fact or trend',
 'Ask about others’ views on industry changes',
 'Discuss how trends impact daily life'
 ],
 exampleScenario: 'Over coffee, we debated which new app will dominate the market.'
 }
 },
 // Add other 10 subcategories
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
