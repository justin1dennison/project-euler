(ns euler.problem-one)

(defn is-multiple? [n x]
    (zero? (rem x n)))
  

(defn main []
  (reduce + (into []
    (filter 
      #(or (is-multiple? 3 %) (is-multiple? 5 %))
    (range 1 1000)))))


(main)