import { getDatabase, ref, onValue, off, set, remove } from 'firebase/database';

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCards(userId, onUpdate) {
    const cardRef = ref(this.db, `${userId}/cards`);
    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(cardRef);
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
