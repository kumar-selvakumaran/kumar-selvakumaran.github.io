---
layout: post
title: The Formal model of statisical learning
date: 2025-11-03 11:06:00-0400
description: A mathematical framework to model learning.
tags: math
# categories: sample-posts
related_posts: false
toc:
  beginning: true
---

## Notation

- A **sequence** is denoted as $(x_1, x_2, \ldots, x_n)$

- A **distribution** over a set $X$ is denoted as $D$. the notation for sampling an element from $D$ is $x\sim D$.

- The **distribution over $n$ element sequences** is denoted as $D^n$

- The **likelihood** of a particular element $x$ in a distribution $D$ is denoted as $P_D(x)$


## Elements

- **Domain Set** ($\mathcal{X}$) : A set containing the data we want to learn from. The set can contain arbitrary mathematical objects eg: vectors.

- **Label Set** ($\mathcal{Y}$) : some property we would like to assign to the data. eg $\mathcal{Y} = \{0,1\}$ i.e. we might want to assign each datapoint to one of $\mathcal{Y}$, and learn this mapping.

- **Ideal mapping** ($f: \mathcal{x} \rightarrow \mathcal{Y}$): This is the mapping we try to learn.

- **Training set (The learner's input)** ($S = (s_1, s_2, \ldots, s_m) : s_i \in \mathcal{X} \times \mathcal{Y}$) : A **sequence** of $m$ datapoint and label pairs $(x_i, y_i)$ (labelled domain points).

- **Hypothesis class** ($\mathcal{H}$) : A set of possible hypotheses that a learning algorithm can choose from.

- **Hypothesis (The learner's output)** ($h\in \mathcal{H},\; h : \mathcal{X} \rightarrow \mathcal{Y}$) : A mapping from the domain set to the label set learned by the learning algorithm.

- **Learning Algorithm** $A: S \rightarrow h$ : The algorithm uses the training set $S$ to learn a particular hypothesis out of $\mathcal{H}$. The hypothesis $h$ learned from the training set $S$ by a learning algorithm $A$ is expressed as $h_S = A(S)$

- **Inductive Bias** The constaint which determines the hypothesis class $\mathcal{H}$ that a learning algorithm $A$ can choose from.

- **Data generation process** : The process used to generate the data from $\mathcal{X}$. Typically, this is modelled as a sampling procedure on a distribution over $\mathcal{X}$ denoted by $\mathcal{D}$. More specifically, The generation process for the training set $S$ is to first sample a datapoint from the distribution $x \sim \mathcal{D}$ , and then get it's label using the ideal mapping $f(x)$. Collect $m$ of such pairs, and that is your training set.

$$
S = \{ (x, f(x)) : x \sim \mathcal{D}\}^m  
$$

- - **I.I.D assumption (Independently and Identically Distributed)** : The data generation process is identical for every datapoint sampled, and is independent for each datapoint. For instance, if the generation process is to sample from $\mathcal{D}$, considering generating a 2 element training set $S = (x_1, x_2)$, then

$$
P_{\mathcal{D}^2}((x_1, x_2)) = P_\mathcal{D}(x_1) \cdot P_\mathcal{D}(x_2)
$$

- **Measure of success**:

  - the error of a hypothesis $h$ is characterized as the probability that $h$ mislabels an element.

  - **True Error / True risk**: This error is defined with respect to the distribution $\mathcal{D}$ and the ideal mapping $f$. It can be modelled as the the probability that the *data generation process* draws a sample which is mislabeled by $h$.

    $$
    L_{\mathcal{D}, f}(h) \equiv \mathbb{P}_{x \sim \mathcal{D}} [h(x) \neq f(x)] \equiv \mathcal{D}(\{x : h(x) \neq f(x)\})
    $$

- - **Training Error / Emperical Error / Emperical risk** The training error is a number of elements from $S$ that are incorrectly predicted divided by the total number of elements in $S$.

$$
L_S(h) \equiv \frac{|\{x_i: h(x_i) \neq y_i\}_{i=1}^m|}{m}
$$

- **Emperical Risk Minimization** : It is an optimization problem to find $h \in \mathcal{H}$ that minimizes the training error / emperical risk.

$$
\text{ERM}(S; A, \mathcal{H}) = \argmin_{h \in \mathcal{H}}L_S(h)
$$

- **Realizability Assumption** : There exists a hypothesis $h^\star \in \mathcal{H}$ that has **0 true error**.

$$
\exists h^\star \in \mathcal{H} : L_{\mathcal{D}, \mathcal{f}}(h^\star) = 0
$$

- **Confidence parameter** $1-\delta$ is considered the confidence parameter, where $\delta$ is the probability of sampling a training set from the domain distribution $S \overset{\text{iid}}{\sim}\mathcal{D}^m$ that is "not representative" of $\mathcal{D}$ is $\delta$ (needs to be formulated mathematically).

- **Accurcy Parameter** ($\epsilon$) Considering the data generation procedure, and the learning algorithm as random variables:
  
  - **Failure**: the event where $h_S$ is a failure, i.e. $L_{\mathcal{D}, f}(h_S) > \epsilon$
  
  - **Approximately correct**: the event where $h_S$ is "approximately correct", i.e. $L_{\mathcal{D}, f}(h_S) \leq \epsilon$.

# Questions

Reached till page 39

1. How is the mistake set bigger thatn the failure set?
2. How is the failure set a subset of the mistake set 