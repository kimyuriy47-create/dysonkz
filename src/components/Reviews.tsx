import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, MessageSquarePlus, Image as ImageIcon, Sparkles, X } from 'lucide-react';
import { INITIAL_REVIEWS, PRODUCT_COLORS } from '../data/productData';
import { Review } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Reviews: React.FC = () => {
  const { language, t } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'with_photos' | 'top'>('all');
  const [isAddingReview, setIsAddingReview] = useState(false);

  // New review form states
  const [author, setAuthor] = useState('');
  const [city, setCity] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [colorBought, setColorBought] = useState(
    language === 'kz' ? PRODUCT_COLORS[0].nameKz : PRODUCT_COLORS[0].nameRu
  );
  const [hasLikedIds, setHasLikedIds] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    if (hasLikedIds[id]) return;
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
    setHasLikedIds((prev) => ({ ...prev, [id]: true }));
  };

  const filteredReviews = reviews.filter((rev) => {
    if (activeFilter === 'with_photos') return rev.photos && rev.photos.length > 0;
    if (activeFilter === 'top') return rev.rating === 5;
    return true;
  });

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !city.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `user-rev-${Date.now()}`,
      author: author.trim(),
      city: city.trim(),
      cityKz: city.trim(),
      rating,
      date: language === 'kz' ? 'Жаңа ғана' : 'Только что',
      dateKz: 'Жаңа ғана',
      colorBought,
      colorBoughtKz: colorBought,
      comment: comment.trim(),
      commentKz: comment.trim(),
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      likes: 1,
    };

    setReviews([newRev, ...reviews]);
    setIsAddingReview(false);
    setAuthor('');
    setCity('');
    setComment('');
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F7F2EC] border border-[#E9DDCF]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A7A]" />
            {t.reviews.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.reviews.title}
          </h2>
          <p className="text-base text-[#52525B] mt-3">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Overall Rating & Stats Banner */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-[#ECE8DF] mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="text-center md:text-left">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
                4.9
              </span>
              <div className="flex items-center gap-1 text-[#EAB308] mt-1 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#71717A] mt-1">
                {language === 'kz' ? 'ҚР бойынша 348 бағалау негізінде' : 'На основе 348 оценок по РК'}
              </p>
            </div>

            <div className="hidden sm:block h-12 w-[1px] bg-[#E2DED5]" />

            <div className="hidden sm:flex flex-col gap-1 text-xs text-[#52525B]">
              <div className="flex items-center gap-2">
                <span className="w-20 font-medium">{language === 'kz' ? 'Сапасы' : 'Качество'}</span>
                <div className="w-24 bg-[#E8E5DD] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#15803D] h-full w-[98%]" />
                </div>
                <span className="font-bold">4.9</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 font-medium">{language === 'kz' ? 'Жеткізу' : 'Доставка'}</span>
                <div className="w-24 bg-[#E8E5DD] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#15803D] h-full w-[96%]" />
                </div>
                <span className="font-bold">4.8</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 font-medium">{language === 'kz' ? 'Нәтижесі' : 'Эффект'}</span>
                <div className="w-24 bg-[#E8E5DD] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#15803D] h-full w-[100%]" />
                </div>
                <span className="font-bold">5.0</span>
              </div>
            </div>
          </div>

          {/* Action buttons & filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#18181B] text-white shadow-2xs'
                  : 'bg-white text-[#52525B] border border-[#D4D4D8] hover:bg-[#F4F4F5]'
              }`}
            >
              {language === 'kz' ? 'Барлық пікірлер' : 'Все отзывы'} ({reviews.length})
            </button>
            <button
              onClick={() => setActiveFilter('with_photos')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeFilter === 'with_photos'
                  ? 'bg-[#18181B] text-white shadow-2xs'
                  : 'bg-white text-[#52525B] border border-[#D4D4D8] hover:bg-[#F4F4F5]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              {language === 'kz' ? 'Фотосымен' : 'С фото'}
            </button>
            <button
              onClick={() => setIsAddingReview(true)}
              className="px-4 py-1.5 rounded-full text-xs font-bold text-[#18181B] bg-[#E5D4C0] hover:bg-[#DBC3AA] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ml-auto"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              {t.reviews.addReviewBtn}
            </button>
          </div>
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => {
            const cityName = language === 'kz' && rev.cityKz ? rev.cityKz : rev.city;
            const dateStr = language === 'kz' && rev.dateKz ? rev.dateKz : rev.date;
            const commentStr = language === 'kz' && rev.commentKz ? rev.commentKz : rev.comment;
            const colorStr = language === 'kz' && rev.colorBoughtKz ? rev.colorBoughtKz : rev.colorBought;

            return (
              <div
                key={rev.id}
                className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-[#ECE8DF] flex flex-col justify-between"
              >
                <div>
                  {/* Author Info */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover border border-white shadow-xs"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-[#18181B] text-sm">
                            {rev.author}
                          </h4>
                          {rev.verified && (
                            <span
                              title={t.reviews.verifiedBuyer}
                              className="inline-flex items-center text-[10px] font-medium text-[#15803D] bg-[#DCFCE7] px-1.5 py-0.5 rounded-md"
                            >
                              <CheckCircle className="w-3 h-3 mr-0.5" />
                              {language === 'kz' ? 'Тексерілген' : 'Проверено'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#71717A]">
                          {cityName} • {dateStr}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-[#EAB308]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Color tag */}
                  <div className="mb-3">
                    <span className="text-[11px] font-medium text-[#71717A] bg-[#F0EDE6] px-2.5 py-1 rounded-md">
                      {language === 'kz' ? 'Түсі:' : 'Цвет:'} {colorStr}
                    </span>
                  </div>

                  {/* Comment Text */}
                  <p className="text-sm text-[#27272A] leading-relaxed">
                    «{commentStr}»
                  </p>

                  {/* Photos if any */}
                  {rev.photos && rev.photos.length > 0 && (
                    <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-1">
                      {rev.photos.map((photo, pIdx) => (
                        <img
                          key={pIdx}
                          src={photo}
                          alt={`Фото от ${rev.author}`}
                          referrerPolicy="no-referrer"
                          className="w-20 h-20 rounded-xl object-cover border border-[#E4E0D7]"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Helpful Like Button */}
                <div className="mt-6 pt-4 border-t border-[#ECE7DC] flex items-center justify-between text-xs text-[#71717A]">
                  <span>{language === 'kz' ? 'Пікір пайдалы ма?' : 'Отзыв полезен?'}</span>
                  <button
                    type="button"
                    onClick={() => handleLike(rev.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      hasLikedIds[rev.id]
                        ? 'text-[#15803D] bg-[#DCFCE7]'
                        : 'hover:bg-[#EFECE5] text-[#52525B]'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{rev.likes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Write Review Dialog */}
        {isAddingReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#E4E4E7] relative">
              <button
                onClick={() => setIsAddingReview(false)}
                className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-[#111111] mb-1">
                {t.reviews.reviewModalTitle}
              </h3>
              <p className="text-xs text-[#71717A] mb-5">
                {language === 'kz'
                  ? 'Dyson Airwrap HS08 стайлері туралы әсеріңізбен бөлісіңіз'
                  : 'Поделитесь впечатлением от использования Dyson Airwrap HS08'}
              </p>

              <form onSubmit={handleAddReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.reviews.namePlaceholder}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4D4D8] text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#18181B] mb-1">
                      {t.modal.cityLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.reviews.cityPlaceholder}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4D4D8] text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18181B] mb-1">
                      {language === 'kz' ? 'Бағалау' : 'Оценка'}
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4D4D8] text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                      <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                      <option value={3}>⭐⭐⭐ (3/5)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {language === 'kz' ? 'Стайлер түсі' : 'Цвет вашего стайлера'}
                  </label>
                  <select
                    value={colorBought}
                    onChange={(e) => setColorBought(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4D4D8] text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  >
                    {PRODUCT_COLORS.map((c) => {
                      const cName = language === 'kz' ? c.nameKz : c.nameRu;
                      return (
                        <option key={c.id} value={cName}>
                          {cName}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    {language === 'kz' ? 'Пікіріңіз' : 'Ваш отзыв'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={t.reviews.commentPlaceholder}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4D4D8] text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingReview(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#52525B] hover:bg-[#F4F4F5] transition-colors cursor-pointer"
                  >
                    {language === 'kz' ? 'Бас тарту' : 'Отмена'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#18181B] hover:bg-[#2F2F32] shadow-sm transition-all cursor-pointer"
                  >
                    {t.reviews.submitReview}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
