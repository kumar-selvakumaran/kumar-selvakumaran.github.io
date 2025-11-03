---
layout: post
title: Notes on writing proofs
date: 2025-11-03 11:06:00-0400
description: glossary of terms and techniques for constructing basic proofs
tags: math
# categories: sample-posts
related_posts: false
toc:
  beginning: true
---

## Terms

* A **Statement** is either true or false but not both.

* **Sentence**: A Sentence is a construct from formal logic theory that roughly translates to statement. Statements are a more semantic, and loosely defined mathematical object than sentences.

* **Open Sentences** (or open statements): An open sentence is when there are free variables present in the statement / sentence. The truth value of an open sentence or open statement is defined only when the value of the variable is given.

* A **Compound Statement a.k.a Expression** is a statement that contains one or more operators.

* **Necessary conditions**: If $P$ is a necessary condition for $Q$, that means $Q$ cannot be true without $P$ being true (although, $P$ happening doesn’t guarantee that $Q$ will happen a.k.a $P$ is not sufficient). If $R$ is the compound statement “$P$ is a necessary condition for $Q$”, then its truth table will be as follows. From the table, notice how $R = Q \implies P$:

  | P | Q | R |
  | - | - | - |
  | T | T | T |
  | T | F | T |
  | F | T | F |
  | F | F | T |

* **Sufficient conditions**: If $P$ is a sufficient condition for $Q$, that means $P$ being true is **fully sufficient** for $Q$ to be true (but it is not the only case where $Q$ is true, a.k.a $P$ is not necessary). If $S$ is the compound statement “$P$ is a sufficient condition for $Q$”, then its truth table is as follows. From the table notice how $S = P \implies Q$:

  | P | Q | S |
  | - | - | - |
  | T | T | T |
  | T | F | F |
  | F | T | T |
  | F | F | T |

* Some commonly used operators are listed below:

  * **Conjunction($P$, $Q$) $\implies P \land Q$**: a.k.a AND for statements. Read as “$P \land Q$ is true only if both $P$ and $Q$ are true”.
  * **Disjunction($P$, $Q$) $\implies P \lor Q$**: a.k.a OR for statements.
  * **Negation: $\neg P$**
  * **Implication: $P \implies Q$**. $P \implies Q$ is False **only if** $P$ is true and $Q$ is false. Implications can be phrased as:

    * if $P$ then $Q$
    * $P$ is sufficient for $Q$
    * $Q$ is necessary for $P$
    * $Q$ unless $\lnot P$

  Consider the following example:

  * Let’s say you wrote a test, let $P$ = “getting $> 80%$”, $Q$ = “you pass”.

  * Let $R$ be the statement: “you pass unless you get $< 80%$”.

    | > 80% | Pass | $P \implies Q$ | < 80% | R |
    | ----- | ---- | -------------- | ----- | - |
    | T     | T    | T              | F     | T |
    | T     | F    | F              | F     | F |
    | F     | T    | T              | T     | T |
    | F     | F    | T              | T     | T |

    * Notice how the “unless” relation mandates that you pass if you get $\geq 80%$, and how it allows you to pass even if you get $< 80%$.
    * Passing is a **necessary** condition for getting $\geq 80%$. More intuitively, if the teacher says $R$, that means “you could not have failed if you have gotten $\geq 80%$”.
    * Getting $\geq 80%$ is **sufficient** for passing. In other words, the teacher saying $R$ also means: getting $> 80%$ itself is enough for you to have passed.

  * **Biconditional statement: $P \leftrightarrow Q$** is true only if $P$ and $Q$ have the same values.

* Two compound statements $X$, $Y$ are **Logically Equivalent** only if for all possible values of the variables of $X$ and $Y$, they have the same truth values. *Two compound statements can be compared for logical equivalence only if they involve the same variables, and the same number of configurations. To formally validate if 2 compound statements are comparable, their “grammars” and “languages” must be checked (formal logic theory).*

* **(Important Logical Equivalencies)**: *For statements $P$, $Q$, and $R$:*

  * $(P \equiv Q) \equiv ((P \implies Q) \land (Q \implies P))$
  * **De Morgan’s Laws**:

    * $\neg (P \land Q) \equiv \neg P \lor \neg Q$
    * $\neg (P \lor Q) \equiv \neg P \land \neg Q$
  * **Conditional Statements**:

    * $P \implies Q \equiv \neg Q \to \neg P$ *(Contrapositive)*
    * $P \implies Q \equiv \neg P \lor Q$
  * **Biconditional Statement**:
    $P \leftrightarrow Q \equiv (P \implies Q) \land (Q \implies P)$
  * **Distributive Laws**:

    * $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$
    * $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$
  * **Conditionals with Disjunctions**:

    * $P \implies (Q \lor R) \equiv (P \land \neg Q) \implies R$
    * $(P \lor Q) \implies R \equiv (P \implies R) \lor (Q \implies R)$

* **Universal Quantifier**: “For every” $\forall$ is a universal quantifier.

* **Existential Quantifier**: “There exists” $\exists$ is an existential quantifier.

* For an open sentence $P(x)$:

  * **Negating existential quantifiers**:
    $\neg(\forall x \in U),[P(x)] \equiv (\exists x \in U),[\neg P(x)]$.
    Roughly, if $U = {x_1, \ldots, x_n}$, then the LHS translates to
    $\neg\bigl(\bigwedge\limits_{i=1}^{n} P(x_i)\bigr)$.
    In English: $P(x)$ for all $x$ in $U$ won’t be collectively true, if and only if there are one or more $x$ in $U$ for which $P(x)$ is not true.
  * $\neg(\exists x \in U)[P(x)] \equiv (\forall x \in U)[\neg P(x)]$.
    It can be read as: There can be no $x$ in $U$ for which $P(x)$ is true, if and only if $P(x)$ is not true for each and every $x$ in $U$.

* **Tautology** is a statement that is always True. e.g. $A \lor \lnot A$.

* **Contradiction** is a statement that is always False. e.g. $A \land \lnot A$.

* **Congruence**:

  * *Geometric Congruence*: when 2 figures vary only by a rigid body transformation.
  * *Modular congruence*: 2 integers $a, b$ are congruent if they have the same remainder when divided by an integer $n$. Expressed as $a \cong b \pmod{n}$. Simply put, $a$ and $b$ must be exactly $kn$ (for some $k \in \mathbb{Z}$) steps away from each other for $a \cong b \pmod{n}$ to hold. For instance, consider

    $-11 \cong 13 \pmod{8}$

    | $a$ | $b$ | $n$ | `a % n`                        | `b % n`                     |
    | --- | --- | --- | ------------------------------ | --------------------------- |
    | -11 | 13  | 8   | `-11 % 8 = -11 - (8 × -2) = 5` | `13 % 8 = 13 - (8 × 1) = 5` |

## Direct Proofs

* When proving an implication or a conditional statement $P \implies Q$, we only need to prove **$Q$ is true whenever $P$ is true**. Why is this sufficient?

  * $(P, Q): TT, TF$ are the only cases where $P$ is true. The only case that can invalidate a conditional is $TF$, and this case is taken care of by proving that **whenever $P$ is true, $Q$ is also true**.

* The truth table for $P \implies Q$ is:

  | $P$ | $Q$ | $P \implies Q$ |
  | --- | --- | -------------- |
  | T   | T   | T              |
  | T   | F   | F              |
  | F   | T   | T              |
  | F   | F   | T              |

* **Constructing proofs**: One method for constructing proofs is the forward–backward method. First, you clearly state the assumptions and the claim. Then, you work backwards from the claim to process it into a form that is more easily “reachable”. Then you process the assumptions to be more relevant to the claims. Finally, you try to bring the claim towards an inference from the assumptions, and you process the assumptions to get closer to the claim (try to make ends meet from both sides).

* **Steps in constructing a proof**: The steps are illustrated with the following example:

  *Given*: $a, b \in \mathbb{Z}$, $a \cong 5 \pmod{8}$, $b \cong 6 \pmod{8}$
  *Prove*: $(a + b) \cong 3 \pmod{8}$

  * **Step 1**: Clearly state the assumptions and the claim.

    * Assumption: $a, b \in \mathbb{Z}$, and $a \cong 5 \pmod{8}$ and $b \cong 6 \pmod{8}$. Let’s call the conjunction of all the statements made by the assumption $P$.
    * Claim: $\forall a, b$, $(a + b) \cong 3 \pmod{8}$. Let’s call the statement made by the claim $Q$.

  * **Step 2**: Try out examples to see if the proposition holds, to convince yourself that it is true. If you find a counterexample, you have disproved the proposition.

    | $a$ | $b$ | $a + b$ | is $(a+b) \cong 3 \pmod{8}$? |
    | --- | --- | ------- | ---------------------------- |
    | 5   | 6   | 11      | yes ($11 = 8 × 1 + 3$)       |
    | -11 | -10 | -21     | yes ($-21 = 8 × (-3) + 3$)   |

  * **Step 3**: Backward from claim – rephrase / process the claim to a more wieldy form.

    * The claim can be restated as “$a + b - 3$ is divisible by $8$” (labelled as $Q_1$).
    * Which can be further restated as $\exists k \in \mathbb{Z}: a + b - 3 = 8k$ (labelled as $Q_2$). Note $Q \equiv Q_1 \equiv Q_2$. Therefore if $Q_2$ holds, $Q_1$ and $Q$ hold.

  * **Step 4**: Forward from assumptions – make inferences from the assumptions and try to direct them towards the claim.

    * Using the formatting of congruences from Step 2, the assumptions can be written as:

      * Let $m, n \in \mathbb{Z}$.
      * $a - 5 = 8m$ (labelled as $P_1$).
      * $b - 6 = 8n$ (labelled as $P_2$).
    * Adding $P_1 + P_2$:
      $(a + b) - 11 = 8(m + n)$
      $\implies (a + b) - 3 = 8(m + n + 1)$ which is of the form claimed by $Q_2$.

  We have shown that the claim can be inferred from reasoning with assumptions.

  **Note:** While presenting the proof it is typical to:

  * Start from the assumptions and proceed till you clearly validate the claim in its raw form.
  * Occasionally brief the reader about your intention before you actually proceed with the steps rigorously.

## Direct proofs involving sets

* A common statement involving sets to prove is “$S$ is a subset of $T$” ($S \subset T$). To prove this, let $U$ be the universal set. Prove
  $\forall x \in U$, if $x \in S$ then $x \in T$.
  This is done by using definitions of the assumptions to infer a trail of membership statements. Notice how that is done in the following example.

  **To prove**: $A - B = A \land B'$

  Let $\forall x \in A - B$

  $$x \in A \land x \notin B$$

  Note, the above statement is a **compound statement**. By definition, the difference $(A - B)$ is the set containing elements in $A$ that are not in $B$. Mathematically:

  $$A - B = {x : x \in A \land x \notin B}$$

  Remember, the components of a compound statement may or may not hold separately (separately, $x \in A$ doesn’t have to hold, but $x \notin B$ holds).

  $$x \notin B \implies x \in B'$$

  $$x \in A \land x \notin B \implies x \in A \land x \in B'$$

  $$\implies x \in A \land B'$$

* **Choose an element method**: When proving statements involving **universal quantifiers**, you choose an **arbitrary element $x \in S$** and use only properties of elements of $S$ to prove the claim (in the above case, you would show $x \in T$).

* To prove 2 sets are equal $S = T$, you can prove:
  $S \subset T \land T \subset S$.

## Proving compounds of logical equivalencies, biconditionals, and more

Consider the following example: Given $P$, show $Q$ holds if and only if $R$.

* This translates to $P \implies (Q \leftrightarrow R)$.

* It is easy to prove simple statements like implications, and compound them using conjunctions and disjunctions, so we can try and infer an equivalent, easier-to-prove statement.

* Consider the following reformulation of $P \implies (Q \leftrightarrow R)$, using the definition of biconditional:

  $$
  P \implies ((Q \implies R) \land (R \implies Q))
  $$

  **Theorem 2.1.2.1**: Implication distributes over conjunction

  $$A \implies (B \land C) \equiv (A \implies B) \land (A \implies C)$$

  **Proof** (sketch): using implication property $A \implies B \equiv \lnot A \lor B$,

  $$
  A \implies (B \land C) \equiv \lnot A \lor (B \land C)
  $$

  Because disjunction is distributive over conjunction:

  $$
  \lnot A \lor (B \land C) \equiv (\lnot A \lor B) \land (\lnot A \lor C)
  $$

  $$
  \equiv (A \implies B) \land (A \implies C)
  $$

  Therefore, using **Theorem 2.1.2.1**,

  $$
  P \implies ((Q \implies R) \land (R \implies Q))
  $$

  $$
  \equiv (P \implies (Q \implies R)) \land (P \implies (R \implies Q))
  $$

  $$
  \equiv (\lnot P \lor (\lnot Q \lor R)) \land (\lnot P \lor (\lnot R \lor Q))
  $$

  Because disjunctions are associative:

  $$
  \equiv ((\lnot P \lor \lnot Q) \lor R) \land ((\lnot P \lor \lnot R) \lor Q)
  $$

  Using De Morgan’s law:

  $$
  \equiv (\lnot(P \land Q) \lor R) \land (\lnot(P \land R) \lor Q)
  $$

  $$
  \equiv ((P \land Q) \implies R) \land ((P \land R) \implies Q)
  $$

  Notice how this final form is a simple conjunction of two implications, which are easy to interpret and prove.

  Consider this reformulation for the following example:

* *Suppose that $a$ and $b$ are legs and $c$ is the hypotenuse of a right triangle. The right triangle is an isosceles triangle if and only if its area is $\dfrac{c^2}{4}$.*

  * Let $P \equiv a^2 + b^2 = c^2$, $Q \equiv a = b$, and $R \equiv \dfrac{ab}{2} = \dfrac{c^2}{4}$. To prove: $P \implies (Q \leftrightarrow R)$.
  * Using the reformulation above, the statement can be rewritten as
    $((P \land Q) \implies R) \land ((P \land R) \implies Q)$, i.e.:

    * Prove:

    * If a triangle is right and isosceles then its area is $\dfrac{c^2}{4}$;

      * Because $a = b$,

       $$
       a^2 + b^2 = 2a^2 = c^2
       $$

       $$
       a = b = \frac{c}{\sqrt{2}}
       $$

       $$
       \text{area} = \frac{ab}{2} = \frac{c^2}{4}
       $$

    * If the triangle is right and its area is $\dfrac{c^2}{4}$ then it is isosceles.

      * Because $\dfrac{ab}{2} = \dfrac{c^2}{4}$,

       $$
       a^2 + b^2 = c^2 = 2ab
       $$

       $$
       a^2 + b^2 - 2ab = (a - b)^2 \implies a = b
       $$

## Proof by contradiction

To prove $P$, we prove $\lnot P \implies C$ where $C$ is a *Contradiction*. The *Tautology* $(\lnot P \implies C) \implies P$ validates this method.

**Example**: If an integer is congruent to 2 modulo 4, can it also be congruent to 3 modulo 6?

Let

$$
P \equiv a = 4x + 2,\quad Q \equiv a = 6y + 3,\quad x, y \in \mathbb{Z}
$$

Then

$$
P \land Q \implies 4x + 2 = 6y + 3
$$

$$
2(2x) = 2(3y) + 1
$$

With this result, we can see the LHS is even and the RHS is odd, which is a contradiction, so $P \land Q$ doesn’t hold, and by contradiction, the opposite is proved true.

In modular form:

$$
2(2x) \bmod 2 = (2(3y) + 1) \bmod 2
$$

$$
0 \bmod 2 = 1 \bmod 2 \implies C
$$

* The idea behind the **proof by contradiction** is showing that the proposition being false leads to a contradiction.

Truth-table illustration:

| $P$ | $\lnot P$ | $C$ | $\lnot P \implies C$ | $(\lnot P \implies C) \implies P$ |
| --- | --------- | --- | -------------------- | --------------------------------- |
| T   | F         | F   | T                    | T                                 |
| T   | F         | F   | T                    | T                                 |
| F   | T         | F   | F                    | T                                 |
| F   | T         | F   | F                    | T                                 |

### Examples

1. Prove / Disprove that $\log_2(3)$ is rational.

   Assume $y = \log_2(3) \in \mathbb{Q}$. Let $m, n \in \mathbb{Z}$.

   $$
   y = \log_2(3) = \frac{m}{n}
   $$

   $$
   \implies 2^{\frac{m}{n}} = 3
   $$

   Raising the equation to the $n$th power:

   $$
   \implies 2^m = 3^n \implies C
   $$

   LHS is even, RHS is odd; hence, $y$ is irrational.

2. Prove / Disprove that $\sqrt{2} + \sqrt{3}$ is rational.

   Let $m, n \in \mathbb{Z}$, assume $\sqrt{2} + \sqrt{3} \in \mathbb{Q}$.
   $$
   \sqrt{2} + \sqrt{3} = \frac{m}{n}
   $$

   Square both sides:

   $$
   2 + 2\sqrt{6} + 3 = \frac{m^2}{n^2}
   $$

   $$
   \sqrt{6} = \frac{m^2}{2n^2} - \frac{5}{2}
   $$

   Since $\dfrac{m^2}{2n^2} \in \mathbb{Q}$ and $\dfrac{5}{2} \in \mathbb{Q}$, we get $\sqrt{6} \in \mathbb{Q}$ (closure), so
   $\exists, p, q \in \mathbb{Z}, q \neq 0 : \sqrt{6} = \dfrac{p}{q}$.

   Squaring on both sides and rearranging:

   $$
   6q^2 = p^2 \implies C
   $$

   $6q^2$ cannot be a perfect square (it has an outstanding factor of 6), whereas the RHS is a perfect square. This is a contradiction. Thus assuming $\sqrt{2} + \sqrt{3}$ is rational leads to a contradiction, so $\sqrt{2} + \sqrt{3}$ is irrational.

## Proving that something doesn’t exist

This is done using a *proof by contradiction*, i.e. showing that said thing existing leads to a *contradiction*.

## Proving multiple cases

* Used when assumptions are in the form of a disjunction:
  $(P \lor Q) \implies R \equiv (P \implies R) \land (Q \implies R)$.
* In some cases the disjunction is framed by the prover when the assumptions from the original problem are not sufficient. The prover imposes additional assumptions as cases that jointly satisfy the original “over-arching” assumption. For instance, consider:

  > If $n$ is an integer, then $n^2 + n$ is an even integer.

  If “$n$ being an integer” is not sufficient for a proof, we consider different ways to slice up this assumption. One way: an integer can be *either even or odd*, so proving $n^2 + n$ is even when $n$ is odd, and when $n$ is even, is sufficient to show that $n^2 + n$ is even for any $n \in \mathbb{Z}$.

  $n$ being positive, negative, or $0$ is another common case split that covers all integers.

## Mathematical induction

1. **Basic Mathematical Induction**: To prove an open sentence $P(n)$ with truth set $\mathbb{N}$, use
   $P(1)$ and $P(k) \implies P(k + 1)$.

2. **Extended Mathematical Induction**: To prove an open sentence $P(n)$ with truth set ${x \in \mathbb{Z} : x \geq M}$ for some $M \in \mathbb{Z}$, use
   $P(M)$ and $P(k) \implies P(k + 1)$.

3. **2nd principle of mathematical induction**: To prove an open sentence $P(n)$ with truth set ${x \in \mathbb{Z} : x \geq M}$ (same as extended induction), but using the following implication for the proof:

   $$
   P(M) \land P(M + 1) \land P(M + 2) \land \dots \land P(k) \implies P(k + 1)
   $$

## References

1. Sundstrom, T. (2022). *Constructing and writing proofs: A guide for mathematics students*. CreateSpace Independent Publishing Platform.

2. Sundstrom, T. (2013). *Mathematical reasoning: Writing and proof* (3rd ed.). CreateSpace Independent Publishing Platform.
